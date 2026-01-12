# API Reference

## Public API

### Search Songs
```http
POST /api/search
```
```json
{ "keyword": "song name", "page": 1 }
```

### Get Play URL
```http
POST /api/play_url
```
```json
{ "song_data": { "mid": "song_mid" }, "prefer_flac": true }
```

### Download Song
```http
POST /api/download
```
```json
{
  "song_data": { "mid": "...", "name": "...", "raw_data": {...} },
  "prefer_flac": true,
  "add_metadata": true
}
```

### Get Lyrics
```http
GET /api/lyric/<song_mid>
```

### Get Cover
```http
POST /api/cover
```
```json
{ "song_data": { "raw_data": {...} }, "size": 800 }
```

### Image Proxy
```http
GET /api/image_proxy?url=https://y.gtimg.cn/...
```

### Credential Status
```http
GET /api/credential/status
```

### Health Check
```http
GET /api/health
```

---

## Admin API

### Admin Page
```http
GET /admin/
```

### Generate Login QR Code
```http
GET /admin/api/get_qrcode/<type>
```
type: `qq` or `wx`

### Query QR Code Status
```http
GET /admin/api/qr_status/<session_id>
```

### Cancel QR Code Session
```http
POST /admin/api/qr_cancel/<session_id>
```

### Check Credential Status
```http
GET /admin/api/credential/status
```

### Refresh Credential
```http
POST /admin/api/credential/refresh
```

### Get Credential Info
```http
GET /admin/api/credential/info
```

### Clear Music Folder
```http
POST /admin/api/clear_music
```

::: tip Full Documentation
For detailed request/response formats, refer to [API doc.md](https://github.com/tooplick/qqmusic_web/blob/main/API%20doc.md)
:::
