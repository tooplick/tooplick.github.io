# Web 登录

通过 Web 界面管理 QQ 音乐凭证。

## 访问地址

```
http://<服务器IP:端口>/plugins/GeQian.order_qqmusic
```

## 登录方式

| 方式 | 说明 |
|------|------|
| QQ 登录 | 使用 QQ 扫码 |
| 微信登录 | 使用微信扫码 |
| 手机客户端 | QQ 音乐 App 扫码 |

## 其他操作

- **查看状态**: `/plugins/GeQian.order_qqmusic/status`
- **删除凭证**: `/plugins/GeQian.order_qqmusic/remove`

## API 接口

| 接口 | 说明 |
|------|------|
| `GET /api/get_qrcode/{type}` | 获取二维码 (qq/wx/mobile) |
| `GET /api/credential/status` | 凭证状态 |
| `POST /api/credential/refresh` | 刷新凭证 |

> ⚠️ 使用 VIP 账号以下载高音质歌曲

👉 配置选项请看 [配置说明](./config)
