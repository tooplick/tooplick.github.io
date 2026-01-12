# 使用指南

## 1. 登录与凭证管理

首先运行凭证管理工具进行登录：

```bash
python credential.py
```

按照提示使用 QQ 或微信扫码登录。

## 2. 单曲下载

```bash
python song.py
```

按照提示输入歌曲名称，选择要下载的歌曲即可。

## 3. 歌单下载

```bash
python songlist.py
```

输入歌单链接或 ID，支持批量下载整个歌单。

## 音质说明

### 高品质模式 (FLAC优先)

下载顺序：FLAC → MP3_320 → MP3_128

优先下载无损音质，当 FLAC 不可用时自动降级。

### 标准模式 (MP3优先)

下载顺序：MP3_320 → MP3_128

优先下载高品质 MP3。

## 文件说明

| 文件 | 说明 |
|------|------|
| `song.py` | 单曲搜索下载 |
| `songlist.py` | 歌单下载 |
| `credential.py` | 登录与凭证管理 |
| `qqmusic_cred.pkl` | 登录凭证（自动生成） |

## 常见问题

如果运行报错，请尝试：

```bash
pip install qqmusic-api-python flask aiohttp mutagen
```

Linux 用户还需安装：

```bash
sudo apt update && sudo apt install libzbar0 libzbar-dev
```
