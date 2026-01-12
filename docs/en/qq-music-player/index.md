# QQ-Music-Player

A modern rewrite of the QQ Music Web Player, designed for **Cloudflare Pages** with a pure frontend + Serverless architecture.

## Features

- ✅ **Pure Frontend Architecture**: Static assets hosted on Cloudflare Pages
- ✅ **Serverless Backend**: Uses Cloudflare Functions for API proxy and request signing
- ✅ **Ultimate Performance**: Smart preloading, auto-prefetch next song lyrics for zero-delay switching
- ✅ **Privacy & Security**: Proxy requests through Cloudflare, hide real IP
- ✅ **PWA Support**: Service Worker offline caching

## Project Structure

```
.
├── functions/              # Cloudflare Functions (backend proxy)
│   └── api/
│       ├── index.js        # General API proxy (CORS & Cookie handling)
│       └── lyric_proxy.js  # Lyrics-specific proxy
├── js/
│   ├── api/                # API wrapper layer
│   ├── utils/              # Utility functions
│   └── app.js              # Core business logic
├── css/                    # Stylesheets
├── images/                 # Image assets
├── index.html              # App entry point
└── sw.js                   # Service Worker
```

## Quick Start

::: tip
This is a Serverless project. Simply deploy to Cloudflare Pages - no server required.
:::

Go to [Deployment Guide](/en/qq-music-player/deploy) to learn how to deploy to Cloudflare Pages.

## Source Code

- **GitHub**: [tooplick/QQ-Music-Player](https://github.com/tooplick/QQ-Music-Player)
- **License**: GPL-3.0
