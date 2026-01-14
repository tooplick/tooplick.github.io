# Usage Guide

How to use QQ Music Downloader.

## Single Song

```bash
python song.py
```

1. Select quality (`y` = FLAC, `n` = MP3)
2. Enter song name to search
3. Select number to download

## Playlist

```bash
python songlist.py
```

1. Enter playlist link or ID
2. Confirm download
3. Select quality

Supported formats:
- ID: `8052190267`
- URL: `https://y.qq.com/n/ryqq/playlist/8052190267`

## Credentials

```bash
python credential.py
```

Functions: Login / Check status / Refresh

## Output

- Location: `./music/` or `./music/{playlist}/`
- Naming: `Artist - Song.format`
- Metadata: lyrics, cover, album info

## Quality

| Mode | Priority |
|------|----------|
| High (y) | FLAC → MP3_320 → MP3_128 |
| Standard (n) | MP3_320 → MP3_128 |

👉 See [Configuration](./config)
