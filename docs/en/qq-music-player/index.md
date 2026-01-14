# QQ-Music-Player

QQ Music Web Player - Serverless Edition for Cloudflare Pages.

**🌐 Live Demo**: [qq.ygking.top](https://qq.ygking.top)

## 🌟 Features

- ✅ **Pure Frontend** - Static assets on Cloudflare Pages
- ✅ **Serverless Backend** - Cloudflare Functions
- ✅ **D1 Storage** - Secure credential storage
- ✅ **Smart Preloading** - Prefetch next song lyrics
- ✅ **PWA Support** - Installable as desktop app

## 🚀 Quick Start

1. Fork [GitHub repo](https://github.com/tooplick/QQ-Music-Player)
2. Create D1 database `qqmusic-credentials`
3. Create Pages project and bind D1
4. Set `INITIAL_CREDENTIAL` env variable

👉 See [Deployment Guide](./deploy)

## 💻 Development

```bash
npm install -g wrangler
wrangler pages dev .
```

👉 See [Development Guide](./development)

## 📁 Structure

```
QQ-Music-Player/
├── functions/       # Cloudflare Functions
├── js/              # Frontend scripts
├── css/             # Styles
├── index.html       # Entry
└── sw.js            # Service Worker
```

## 🔐 Credentials

See [qq-music-api Credentials](/en/qq-music-api/credential)

## 🔗 Links

- [Live Demo](https://qq.ygking.top)
- [GitHub](https://github.com/tooplick/QQ-Music-Player)
- [QQ Music API](/en/qq-music-api/)
