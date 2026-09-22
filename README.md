# Regna Bewind

Personal React + Vite project, configured for deployment on Netlify.

## Local development

This project uses [mise](https://mise.jdx.dev/) to pin Node.js 22 and provide npm.

```bash
mise install
```

```bash
mise exec -- npm install
mise exec -- npm run dev
```

## Build

```bash
mise exec -- npm run build
```

The Netlify build configuration is in `netlify.toml`.
