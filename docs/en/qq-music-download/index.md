# QQ Music Downloader

Python-based QQ Music download tool.

## 🌟 Features

- 🎵 **Single Song** - Search and download songs
- 📋 **Playlist** - Batch download playlists
- 🔐 **Login** - QQ/WeChat login for VIP songs
- 🎧 **Multi-Quality** - FLAC / MP3_320 / MP3_128
- 📝 **Metadata** - Auto-add lyrics, cover, album info

## 🚀 Quick Start

**Windows**: [Download ZIP](https://github.com/tooplick/qq-music-download/releases/latest/download/songs_download_windows.zip)

### From Source

```bash
git clone https://github.com/tooplick/qq-music-download
cd qq-music-download
pip install -r requirements.txt
```
```bash
python credential.py  # Login
```
```bash
python song.py        # Single song
```
```bash
python songlist.py    # Playlist
```

👉 See [Usage Guide](./usage)

## ⚙️ Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| `COVER_SIZE` | `800` | Cover size |
| `MUSIC_DIR` | `./music` | Download dir |
| `EXTERNAL_API_URL` | `api.ygking.top` | External API |

👉 See [Configuration](./config)

## 🔗 Links

- [GitHub](https://github.com/tooplick/qq-music-download)
- [Releases](https://github.com/tooplick/qq-music-download/releases)
- [External API](/en/qq-music-api/)

## ⚠️ Disclaimer

For learning only. Delete music within 24 hours. [GPL-3.0](https://github.com/tooplick/qq_music_download/blob/main/LICENSE)
