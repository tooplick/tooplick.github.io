# Nekro QQ Music Plugin

A QQ Music plugin based on the [Nekro Agent](https://github.com/KroMiose/nekro-agent) framework, let AI assistants play music for you.

## Features

- 🔍 Smart search for QQ Music songs
- 🖼️ Configurable album cover size
- 🎵 Multiple quality options: FLAC, MP3_320, MP3_128
- 🌐 Web interface for QQ Music credential management

## Credential Generation

### Using Web Interface

The plugin provides a web interface for generating and managing QQ Music credentials:

1. After starting the plugin, visit `http://<server-ip:NA-port>/plugins/GeQian.order_qqmusic`
2. Select login method (QQ / WeChat / Mobile)
3. Scan the QR code with your phone to complete login
4. Credentials will be saved automatically

::: warning Note
Please use a VIP account to generate credentials for high-quality music!
:::

## Bot Usage Example

```python
# Manual call
/exec send_music("onebot_v11-private_12345678", "晴天")
```

## Technical Details

- Uses official QQ Music API for search and audio retrieval
- Supports automatic audio format downgrade (FLAC → MP3_320 → MP3_128)
- Async processing for all network requests
- Web interface for credential management

## Source Code

- **GitHub**: [tooplick/nekro_order_qqmusic](https://github.com/tooplick/nekro_order_qqmusic)
- **License**: GPL-3.0
