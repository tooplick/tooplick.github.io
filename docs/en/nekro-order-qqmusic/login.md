# Web Login

Manage QQ Music credentials via Web UI.

## Access

```
http://<server:port>/plugins/GeQian.order_qqmusic
```

## Login Methods

| Method | Description |
|--------|-------------|
| QQ Login | Scan with QQ |
| WeChat Login | Scan with WeChat |
| Mobile Client | Scan with QQ Music app |

## Other Operations

- **Check status**: `/plugins/GeQian.order_qqmusic/status`
- **Delete credentials**: `/plugins/GeQian.order_qqmusic/remove`

## API

| Endpoint | Description |
|----------|-------------|
| `GET /api/get_qrcode/{type}` | Get QR code (qq/wx/mobile) |
| `GET /api/credential/status` | Credential status |
| `POST /api/credential/refresh` | Refresh credentials |

> ⚠️ Use VIP account for high-quality songs

👉 See [Configuration](./config)
