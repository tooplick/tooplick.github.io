# Configuration

Edit `Config` class in `song.py` or `songlist.py`.

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `COVER_SIZE` | `800` | Cover size (150/300/500/800) |
| `DOWNLOAD_TIMEOUT` | `30` | Timeout (seconds) |
| `CREDENTIAL_FILE` | `qqmusic_cred.pkl` | Credential file |
| `MUSIC_DIR` | `./music` | Download directory |
| `SEARCH_RESULTS_COUNT` | `5` | Search results count |
| `EXTERNAL_API_URL` | `https://api.ygking.top` | External API |

## Examples

### High Quality

```python
class Config:
    COVER_SIZE = 800
    DOWNLOAD_TIMEOUT = 60
```

### Fast Download

```python
class Config:
    COVER_SIZE = 300
    DOWNLOAD_TIMEOUT = 30
```

## Credential Priority

1. Local file (`qqmusic_cred.pkl`)
2. External API (`api.ygking.top`)

👉 See [Usage Guide](./usage)
