const path = require('path');
const fs = require('fs');

// Resolve jimp from the current working directory (where npm install jimp was run)
function resolveJimp() {
  const cwd = process.cwd();
  try {
    const jimpPath = require.resolve('jimp', { paths: [cwd] });
    return require(jimpPath);
  } catch {
    try {
      return require('jimp');
    } catch {
      console.error('Error: jimp is not installed. Run: npm install jimp --no-save');
      process.exit(1);
    }
  }
}

const { Jimp } = resolveJimp();

// Parse arguments
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node remove-bg.js <input.png> [output.png] [--brightness=N] [--saturation=N]');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = args[1] ? path.resolve(args[1]) : inputPath;

// Default thresholds
let brightnessThreshold = 245;
let saturationThreshold = 0.12;

for (const arg of args) {
  if (arg.startsWith('--brightness=')) {
    brightnessThreshold = parseFloat(arg.split('=')[1]);
  }
  if (arg.startsWith('--saturation=')) {
    saturationThreshold = parseFloat(arg.split('=')[1]);
  }
}

if (!fs.existsSync(inputPath)) {
  console.error('Error: Input file not found:', inputPath);
  process.exit(1);
}

Jimp.read(inputPath)
  .then((image) => {
    let transparentPixels = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];

      // Already transparent
      if (a < 10) {
        this.bitmap.data[idx + 3] = 0;
        return;
      }

      const brightness = (r + g + b) / 3;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const saturation = max === 0 ? 0 : (max - min) / max;

      // Remove background: high brightness + low saturation
      if (brightness > brightnessThreshold || (brightness > brightnessThreshold - 10 && saturation < saturationThreshold)) {
        this.bitmap.data[idx + 3] = 0;
        transparentPixels++;
      }
    });

    return image.write(outputPath).then(() => {
      console.log('Done:', outputPath);
      console.log('Pixels made transparent:', transparentPixels);
    });
  })
  .catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
  });
