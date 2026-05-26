---
name: redbook-cli
description: Use the @lucasygu/redbook Xiaohongshu CLI to search, read, analyze, and automate Red Note content from Codex. Use when the user asks to research Xiaohongshu/XHS topics, inspect notes, analyze creators, verify redbook login, or troubleshoot the redbook CLI.
---

# Redbook CLI

Use the `redbook` command-line tool for Xiaohongshu/Red Note research and content operations.

Source:

- GitHub: https://github.com/lucasygu/redbook
- npm package: `@lucasygu/redbook`

## Prerequisites

- Node.js 22 or newer.
- Install globally with:

```bash
npm install -g @lucasygu/redbook
```

- Verify the installed binary:

```bash
redbook --help
redbook whoami
```

## Authentication

`redbook` uses the user's browser cookies. Ask the user to log in to https://www.xiaohongshu.com/ in Chrome first.

On Windows with Chrome 127 or newer, automatic cookie extraction can fail because Chrome may lock or encrypt the cookie database. If `redbook whoami` reports that no `a1` cookie was found, use the manual fallback:

1. Open Chrome and visit `https://www.xiaohongshu.com/`.
2. Confirm the user is logged in.
3. Open DevTools.
4. Go to Application > Cookies > `xiaohongshu.com`.
5. Copy at least the `a1` and `web_session` cookie values.
6. Run:

```bash
redbook whoami --cookie-string "a1=VALUE; web_session=VALUE"
```

Never print the user's real cookie values in chat or commit them to files.

## Common Commands

```bash
redbook search "AI Coding" --json
redbook read "<note-url>" --json
redbook comments "<note-url>" --json --all
redbook user "<user-id>" --json
redbook user-posts "<user-id>" --json
redbook topics "Codex" --json
redbook feed --json
redbook favorites --json
redbook analyze-viral "<note-url>" --json
redbook viral-template "<url1>" "<url2>" --json
redbook render content.md --style xiaohongshu
```

Always prefer `--json` when Codex needs to parse the output.

## Workflow

1. Check that `redbook` is installed with `redbook --help`.
2. Check login with `redbook whoami`.
3. If authentication fails, explain the cookie issue and ask the user to log in or provide a cookie string out of band.
4. For research tasks, start broad with `search` or `topics`, then inspect promising notes with `read` and `comments`.
5. Summarize findings with note URLs, visible engagement signals, and any uncertainty caused by missing auth, rate limits, or private content.

## Safety

- Treat cookies and session strings as secrets.
- Do not store cookies in repo files.
- Use `--dry-run` where available before engagement actions such as batch replies.
- Ask for confirmation before posting, replying, liking, collecting, deleting, or publishing content.

## Local Verification

On this machine, `@lucasygu/redbook@0.7.2` was installed globally with npm and `redbook --help` worked.

`redbook whoami` ran but did not find a valid Xiaohongshu session in Chrome. The CLI suggested logging in to Xiaohongshu in Chrome or using:

```bash
redbook whoami --cookie-string "a1=VALUE; web_session=VALUE"
```
