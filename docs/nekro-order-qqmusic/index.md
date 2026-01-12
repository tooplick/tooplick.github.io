# Nekro QQ音乐点歌插件

基于 [Nekro Agent](https://github.com/KroMiose/nekro-agent) 框架的 QQ 音乐点歌插件，让 AI 助手为你点歌。

## 功能特点

- 🔍 智能搜索 QQ 音乐歌曲
- 🖼️ 可配置专辑封面尺寸
- 🎵 可选 FLAC、MP3_320、MP3_128 音质
- 🌐 提供 Web 界面管理 QQ 音乐凭证

## 凭证生成

### 使用 Web 界面

插件提供了一个 Web 界面用于生成和管理 QQ 音乐凭证：

1. 启动插件后，访问 `http://<服务器IP:NA端口>/plugins/GeQian.order_qqmusic`
2. 选择登录方式（QQ / 微信 / 手机）
3. 使用手机扫描二维码完成登录
4. 凭证将自动保存

::: warning 注意
请使用 VIP 账号生成凭证，以获取高音质音乐！
:::

## Bot 调用示例

```python
# 手动调用
/exec send_music("onebot_v11-private_12345678", "晴天")
```

## 技术细节

- 使用 QQ 音乐官方 API 进行搜索和音频获取
- 支持音频格式自动降级（FLAC → MP3_320 → MP3_128）
- 异步处理所有网络请求
- 提供 Web 界面用于凭证管理

## 源代码

- **GitHub**: [tooplick/nekro_order_qqmusic](https://github.com/tooplick/nekro_order_qqmusic)
- **许可证**: GPL-3.0
