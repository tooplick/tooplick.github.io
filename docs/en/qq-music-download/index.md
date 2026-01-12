# QQ Music Downloader

A Python-based QQ Music download tool supporting single song search and playlist batch download.

## Features

- 📥 **Single Song Download** - Search and download individual songs
- 📋 **Playlist Download** - Download entire public playlists
- 🔐 **Login Support** - QQ/WeChat login for VIP songs
- 🎵 **Multiple Quality Options** - FLAC, MP3_320, MP3_128
- 🔑 **Unified Credential Management** - Login, check, refresh in one place

## System Requirements

- Python 3.10+
- Windows / macOS / Linux

## Quick Installation

```bash
# Clone the project
git clone --depth=1 https://github.com/tooplick/qq_music_download
cd qq_music_download

# Install dependencies
pip install -r requirements.txt
```

Or install using `pyproject.toml`:

```bash
pip install .
```

## Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| `COVER_SIZE` | 800 | Cover image size (150/300/500/800) |
| `DOWNLOAD_TIMEOUT` | 30 | Network request timeout (seconds) |
| `CREDENTIAL_FILE` | `qqmusic_cred.pkl` | Credential file location |
| `MUSIC_DIR` | `./music` | Music file save directory |
| `SEARCH_RESULTS_COUNT` | 5 | Number of search results |

## Source Code

- **GitHub**: [tooplick/qq_music_download](https://github.com/tooplick/qq_music_download)
- **License**: GPL-3.0
