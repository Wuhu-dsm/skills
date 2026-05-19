---
name: png-bg-remover
description: Remove background grid, noise, or unwanted light areas from PNG images using pixel-level brightness and saturation analysis. Use when a user needs to clean up a PNG cutout, remove checkerboard/gray grid backgrounds, make image backgrounds transparent, or process exported design assets where the background was not properly removed.
---

# PNG Background Remover

Remove unwanted backgrounds from PNG images by analyzing each pixel's brightness and saturation. This is useful for cleaning up design cutouts that still contain grid lines, noise, or light-colored background remnants.

## How It Works

The script (`scripts/remove-bg.js`) uses **jimp** to process PNG files pixel by pixel:

1. **Brightness check** — pixels with average RGB above the brightness threshold are treated as background
2. **Saturation check** — near-white pixels with very low color saturation (gray/white) are also removed
3. **Already-transparent pixels** are preserved as fully transparent

## Prerequisites

Install `jimp` in the working directory before running:

```bash
npm install jimp --no-save
```

## Usage

### Quick Clean (defaults)

```bash
node <skill-path>/scripts/remove-bg.js input.png
```

Overwrites `input.png` with the cleaned version.

### Custom Output

```bash
node <skill-path>/scripts/remove-bg.js input.png output.png
```

### Adjust Thresholds

If the default settings remove too much or too little:

```bash
# Stricter — only very bright white pixels
node <skill-path>/scripts/remove-bg.js input.png output.png --brightness=250 --saturation=0.08

# Looser — also remove light gray areas
node <skill-path>/scripts/remove-bg.js input.png output.png --brightness=235 --saturation=0.20
```

**Parameters:**

- `--brightness=N` (default: `245`): Average RGB value above which a pixel is removed. Range 0–255.
- `--saturation=N` (default: `0.12`): For pixels within 10 units of the brightness threshold, if saturation is below this value, they are also removed. Range 0–1.

## Workflow

1. Identify the PNG file to clean
2. If `jimp` is not installed, run `npm install jimp --no-save`
3. Run the script with the input file
4. Review the output — if stars/foreground elements are damaged, re-run with a higher `--brightness` threshold; if background remnants remain, lower the threshold
5. Replace the original file or update the reference in code

## When to Adjust Defaults

| Problem | Fix |
|---------|-----|
| Foreground elements partially disappear | Raise `--brightness` (e.g., `250`) |
| Background grid/noise still visible | Lower `--brightness` (e.g., `235`) or raise `--saturation` |
| Light gray shadows wrongly removed | Raise `--saturation` (e.g., `0.20`) |
