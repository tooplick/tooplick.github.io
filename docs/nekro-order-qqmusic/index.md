# Nekro QQ音乐点歌

基于 [Nekro Agent](https://github.com/KroMiose/nekro-agent) 框架的 QQ 音乐点歌插件。

## 🌟 功能特性

- 🎵 **智能搜索** - 通过关键词搜索 QQ 音乐
- 🔌 **外部 API** - 支持配置外部 API，无需本地凭证
- 🔊 **多音质** - FLAC / MP3_320 / MP3_128
- 🎴 **音乐卡片** - 支持 QQ 音乐 JSON Ark 卡片
- 🔐 **Web 登录** - Web 界面管理凭证

## 📋 使用模式

### 外部 API (推荐)

配置 `external_api_url` 使用外部 API，无需本地凭证：

```yaml
external_api_url: "https://api.ygking.top"
```

### 本地凭证

通过 [Web 登录](./login) 获取凭证。

👉 详细配置请看 [配置说明](./config)

## 🤖 Bot 调用

```python
# AI 自动调用或手动执行
/exec send_music("onebot_v11-group_12345678", "周杰伦 晴天")
```

## 🔗 相关项目

- [Nekro Agent](https://github.com/KroMiose/nekro-agent) - 框架
- [qq-music-api](/qq-music-api/) - 外部 API 部署

## ⚠️ 注意事项

- 遵守 QQ 音乐使用条款
- 仅用于学习交流
- [GPL-3.0 License](https://github.com/tooplick/nekro_order_qqmusic/blob/main/LICENSE)
