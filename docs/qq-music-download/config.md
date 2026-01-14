# 配置说明

在 `song.py` 或 `songlist.py` 中修改 `Config` 类。

## 参数说明

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `COVER_SIZE` | `800` | 封面尺寸 (150/300/500/800) |
| `DOWNLOAD_TIMEOUT` | `30` | 超时时间 (秒) |
| `CREDENTIAL_FILE` | `qqmusic_cred.pkl` | 凭证文件 |
| `MUSIC_DIR` | `./music` | 下载目录 |
| `SEARCH_RESULTS_COUNT` | `5` | 搜索结果数 |
| `EXTERNAL_API_URL` | `https://api.ygking.top` | 外部 API |

## 配置示例

### 高品质

```python
class Config:
    COVER_SIZE = 800
    DOWNLOAD_TIMEOUT = 60
```

### 快速下载

```python
class Config:
    COVER_SIZE = 300
    DOWNLOAD_TIMEOUT = 30
```

## 凭证优先级

1. 本地文件 (`qqmusic_cred.pkl`)
2. 外部 API (`api.ygking.top`)

👉 基础操作请看 [使用指南](./usage)
