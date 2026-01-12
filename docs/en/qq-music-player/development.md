# Local Development

Although this is a Serverless project, you can use `wrangler` to simulate it locally.

## Prerequisites

- Node.js (v18+ recommended)
- Wrangler CLI

## Install Wrangler

```bash
npm install -g wrangler
```

## Start Development Server

```bash
# Clone the project
git clone https://github.com/tooplick/QQ-Music-Player.git
cd QQ-Music-Player

# Install dependencies
npm install

# Start dev server
wrangler pages dev .
```

This will start a local development server (typically `http://localhost:8788`) that simulates Cloudflare Functions.

## Project Structure

| Directory/File | Description |
|----------------|-------------|
| `functions/api/` | Cloudflare Functions for API proxy |
| `js/api/` | Frontend API wrapper layer |
| `js/utils/` | Utility functions including decryption module |
| `js/app.js` | Core business logic |
| `sw.js` | Service Worker for offline caching |
