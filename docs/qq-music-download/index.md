# QQ音乐下载器

基于 Python 的 QQ 音乐下载工具。

## 🌟 功能特性

- 🎵 **单曲下载** - 搜索并下载单曲
- 📋 **歌单下载** - 批量下载歌单
- 🔐 **登录支持** - QQ/微信登录下载 VIP 歌曲
- 🎧 **多音质** - FLAC / MP3_320 / MP3_128
- 📝 **元数据** - 自动添加歌词、封面、专辑信息

## 🚀 快速开始

**Windows 下载**: [songs_download_windows.zip](https://github.com/tooplick/qq-music-download/releases/latest/download/songs_download_windows.zip)

### 源码运行

```bash
git clone https://github.com/tooplick/qq-music-download
cd qq-music-download
pip install -r requirements.txt

# 登录
python credential.py

# 单曲下载
python song.py

# 歌单下载
python songlist.py
```

👉 详细操作请看 [使用指南](./usage)

## ⚙️ 配置

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `COVER_SIZE` | `800` | 封面尺寸 |
| `MUSIC_DIR` | `./music` | 下载目录 |
| `EXTERNAL_API_URL` | `api.ygking.top` | 外部 API |

👉 详见 [配置说明](./config)

## 🔗 相关链接

- [GitHub](https://github.com/tooplick/qq-music-download)
- [Releases](https://github.com/tooplick/qq-music-download/releases)
- [外部 API](/qq-music-api/)

## ⚠️ 免责声明

仅供学习使用，下载音乐请于 24 小时内删除。[GPL-3.0](https://github.com/tooplick/qq_music_download/blob/main/LICENSE)
