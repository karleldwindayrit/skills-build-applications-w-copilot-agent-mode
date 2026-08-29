# Octofit Tracker frontend

This Vite app talks to the Octofit API backend. The browser must know the GitHub Codespace name so it can call the public forwarded port in GitHub Codespaces.

## Required environment variable

Create a `.env.local` file in this folder with the following value:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

If `VITE_CODESPACE_NAME` is not defined, the app falls back to `http://localhost:8000` so local development still works.

When the codespace name is defined, requests use the public Codespaces URL pattern:

```text
https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

## Local development

```bash
npm install
npm run dev -- --host 0.0.0.0
```

The app expects the backend API to be available on port 8000.
