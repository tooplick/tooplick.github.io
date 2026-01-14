# API Reference

Complete API reference documentation.

## Base URL

```
https://api.ygking.top
```

## Response Format

```json
{
  "code": 0,
  "data": {...},
  "message": "..."
}
```

---

## Search API

### GET /api/search

| Parameter | Type | Required | Default | Description |
|-----------|------|:--------:|---------|-------------|
| `keyword` | string | ✅ | - | Search keyword |
| `type` | string | - | `song` | Type: song/singer/album/playlist |
| `num` | int | - | `20` | Results count (1-100) |
| `page` | int | - | `1` | Page number |

```bash
GET /api/search?keyword=Jay%20Chou&type=song&num=10
```

---

## Song API

### GET /api/song/url

| Parameter | Type | Required | Description |
|-----------|------|:--------:|-------------|
| `mid` | string | ✅ | Song MID(s), comma-separated |
| `quality` | string | - | Quality: 128/320/flac |

```bash
GET /api/song/url?mid=0039MnYb0qxYhV&quality=320
```

### GET /api/song/detail

| Parameter | Type | Required | Description |
|-----------|------|:--------:|-------------|
| `mid` | string | ✅* | Song MID |
| `id` | int | ✅* | Song ID |

---

## Lyric API

### GET /api/lyric

| Parameter | Type | Required | Description |
|-----------|------|:--------:|-------------|
| `mid` | string | ✅* | Song MID |
| `id` | int | ✅* | Song ID |

Returns auto-decrypted LRC/QRC lyrics.

---

## Album/Playlist/Artist API

### GET /api/album

```bash
GET /api/album?mid=002fRO0N4FftzY
```

### GET /api/playlist

```bash
GET /api/playlist?id=8052190267
```

### GET /api/singer

```bash
GET /api/singer?mid=0025NhlN2yWrP4
```

---

## Charts API

### GET /api/top

```bash
# Get chart list
GET /api/top

# Get specific chart
GET /api/top?id=4&num=50
```

---

## Credential API

### GET /api/credential

Returns current credential info (masked).

---

## Error Codes

| Code | Description |
|------|-------------|
| 0 | Success |
| 400 | Bad request |
| 401 | Invalid credentials |
| 404 | Not found |
| 500 | Server error |
