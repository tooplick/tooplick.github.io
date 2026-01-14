# QQ Music API

QQ Music API service based on Cloudflare Workers + D1.

**🌐 Live Demo**: [api.ygking.top](https://api.ygking.top)

## 🌟 Features

- 🚀 **Serverless** - Cloudflare Workers edge deployment
- 🗄️ **D1 Database** - Persistent credential storage
- 🔄 **Auto Refresh** - Cron job auto-refreshes credentials
- 📝 **Lyric Decryption** - Auto-decrypt QRC/LRC
- 🎵 **Complete API** - Search, songs, lyrics, albums, playlists

## 🚀 Quick Start

1. Fork [GitHub repo](https://github.com/tooplick/qq-music-api)
2. Create D1 database
3. Deploy to Cloudflare Workers
4. Configure credentials

👉 See [Deployment Guide](./deploy)

## 📡 API Overview

| Endpoint | Description |
|----------|-------------|
| `/api/search` | Search songs/artists/albums |
| `/api/song/url` | Get playback URL |
| `/api/lyric` | Get lyrics (decrypted) |
| `/api/album` | Album details |
| `/api/playlist` | Playlist details |

👉 Full reference: [API Documentation](./api)

## 🔐 Credentials

Get credentials via:
- [qq-music-download](https://github.com/tooplick/qq-music-download)
- [nekro_order_qqmusic](/en/nekro-order-qqmusic/) Web UI

👉 See [Credentials Guide](./credential)

## 🔗 Links

- [GitHub](https://github.com/tooplick/qq-music-api)
- [Live Demo](https://api.ygking.top)
