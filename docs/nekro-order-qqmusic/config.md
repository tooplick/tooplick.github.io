# 配置说明

Nekro Agent 管理界面配置选项。

## 配置项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `external_api_url` | string | `https://api.ygking.top` | 外部 API (留空用本地凭证) |
| `cover_size` | enum | `500` | 封面尺寸 (0=不发送) |
| `preferred_quality` | enum | `FLAC` | 优先音质 |
| `auto_refresh_credential` | bool | `true` | 自动刷新凭证 |
| `enable_json_card` | bool | `true` | 使用音乐卡片 |

## 音质降级

- FLAC → MP3_320 → MP3_128
- MP3_320 → MP3_128

## 推荐配置

### 外部 API (推荐)

```yaml
external_api_url: "https://api.ygking.top"
cover_size: "500"
preferred_quality: "MP3_320"
```

### 本地凭证

```yaml
external_api_url: ""
auto_refresh_credential: true
```

👉 登录方法请看 [Web 登录](./login)
