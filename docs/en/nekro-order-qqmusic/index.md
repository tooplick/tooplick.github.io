# Nekro QQ Music Plugin

QQ Music plugin for [Nekro Agent](https://github.com/KroMiose/nekro-agent) framework.

## 🌟 Features

- 🎵 **Smart Search** - Search QQ Music by keywords
- 🔌 **External API** - Use external API, no local credentials needed
- 🔊 **Multi-Quality** - FLAC / MP3_320 / MP3_128
- 🎴 **Music Cards** - QQ Music JSON Ark cards
- 🔐 **Web Login** - Web UI for credentials

## 📋 Usage Modes

### External API (Recommended)

```yaml
external_api_url: "https://api.ygking.top"
```

### Local Credentials

Use [Web Login](./login) to get credentials.

👉 See [Configuration](./config)

## 🤖 Bot Usage

```python
/exec send_music("onebot_v11-group_12345678", "Jay Chou Sunny Day")
```

## 🔗 Related

- [Nekro Agent](https://github.com/KroMiose/nekro-agent) - Framework
- [qq-music-api](/en/qq-music-api/) - External API

## ⚠️ Notice

For learning purposes only. [GPL-3.0 License](https://github.com/tooplick/nekro_order_qqmusic/blob/main/LICENSE)
