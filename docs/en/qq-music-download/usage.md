# Usage Guide

## 1. Login & Credential Management

First, run the credential management tool to login:

```bash
python credential.py
```

Follow the prompts to scan QR code with QQ or WeChat.

## 2. Single Song Download

```bash
python song.py
```

Enter the song name when prompted and select the song to download.

## 3. Playlist Download

```bash
python songlist.py
```

Enter the playlist link or ID to batch download the entire playlist.

## Audio Quality

### High Quality Mode (FLAC Priority)

Download order: FLAC → MP3_320 → MP3_128

Prioritizes lossless quality, automatically downgrades when FLAC is unavailable.

### Standard Mode (MP3 Priority)

Download order: MP3_320 → MP3_128

Prioritizes high-quality MP3.

## File Description

| File | Description |
|------|-------------|
| `song.py` | Single song search and download |
| `songlist.py` | Playlist download |
| `credential.py` | Login and credential management |
| `qqmusic_cred.pkl` | Login credentials (auto-generated) |

## Troubleshooting

If you encounter errors, try:

```bash
pip install qqmusic-api-python flask aiohttp mutagen
```

Linux users also need:

```bash
sudo apt update && sudo apt install libzbar0 libzbar-dev
```
