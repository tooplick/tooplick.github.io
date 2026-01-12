# QQ音乐下载器

基于 Python 的 QQ 音乐下载工具，支持单曲搜索下载和歌单批量下载。

## 功能特点

- 📥 **单曲下载** - 支持搜索并下载单首歌曲
- 📋 **歌单下载** - 支持下载公开歌单
- 🔐 **登录支持** - 支持 QQ/微信 登录，可下载 VIP 歌曲
- 🎵 **多音质选择** - 支持 FLAC、MP3_320、MP3_128 等音质
- 🔑 **统一凭证管理** - 登录、检查、刷新一站式管理

## 系统要求

- Python 3.10+
- Windows / macOS / Linux

## 快速安装

```bash
# 克隆项目
git clone --depth=1 https://github.com/tooplick/qq_music_download
cd qq_music_download

# 安装依赖
pip install -r requirements.txt
```

或者使用 `pyproject.toml` 安装：

```bash
pip install .
```

## 配置参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `COVER_SIZE` | 800 | 封面图片尺寸 (150/300/500/800) |
| `DOWNLOAD_TIMEOUT` | 30 | 网络请求超时时间（秒） |
| `CREDENTIAL_FILE` | `qqmusic_cred.pkl` | 凭证文件存储位置 |
| `MUSIC_DIR` | `./music` | 音乐文件保存目录 |
| `SEARCH_RESULTS_COUNT` | 5 | 搜索结果数量 |

## 源代码

- **GitHub**: [tooplick/qq_music_download](https://github.com/tooplick/qq_music_download)
- **许可证**: GPL-3.0
