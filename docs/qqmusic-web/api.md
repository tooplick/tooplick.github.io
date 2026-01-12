# API 接口

## 公共 API

### 搜索歌曲
```http
POST /api/search
```
```json
{ "keyword": "歌曲名", "page": 1 }
```

### 获取播放 URL
```http
POST /api/play_url
```
```json
{ "song_data": { "mid": "歌曲MID" }, "prefer_flac": true }
```

### 下载歌曲
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

### 获取歌词
```http
GET /api/lyric/<song_mid>
```

### 获取封面
```http
POST /api/cover
```
```json
{ "song_data": { "raw_data": {...} }, "size": 800 }
```

### 图片代理
```http
GET /api/image_proxy?url=https://y.gtimg.cn/...
```

### 凭证状态
```http
GET /api/credential/status
```

### 健康检查
```http
GET /api/health
```

---

## 管理 API

### 管理页面
```http
GET /admin/
```

### 生成登录二维码
```http
GET /admin/api/get_qrcode/<type>
```
type: `qq` 或 `wx`

### 查询二维码状态
```http
GET /admin/api/qr_status/<session_id>
```

### 取消二维码会话
```http
POST /admin/api/qr_cancel/<session_id>
```

### 检查凭证状态
```http
GET /admin/api/credential/status
```

### 刷新凭证
```http
POST /admin/api/credential/refresh
```

### 获取凭证信息
```http
GET /admin/api/credential/info
```

### 清空音乐文件夹
```http
POST /admin/api/clear_music
```

::: tip 完整文档
更详细的请求/响应格式，请参考 [API doc.md](https://github.com/tooplick/qqmusic_web/blob/main/API%20doc.md)
:::
