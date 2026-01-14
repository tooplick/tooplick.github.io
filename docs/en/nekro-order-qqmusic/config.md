# Configuration

Nekro Agent management interface settings.

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `external_api_url` | string | `https://api.ygking.top` | External API (empty for local) |
| `cover_size` | enum | `500` | Cover size (0=none) |
| `preferred_quality` | enum | `FLAC` | Preferred quality |
| `auto_refresh_credential` | bool | `true` | Auto-refresh credentials |
| `enable_json_card` | bool | `true` | Use music cards |

## Quality Fallback

- FLAC → MP3_320 → MP3_128
- MP3_320 → MP3_128

## Recommended

### External API

```yaml
external_api_url: "https://api.ygking.top"
cover_size: "500"
preferred_quality: "MP3_320"
```

### Local Credentials

```yaml
external_api_url: ""
auto_refresh_credential: true
```

👉 See [Web Login](./login)
