# API 接口文档

完整的 API 接口参考文档。

## 通用说明

### 基础 URL

```
https://api.ygking.top
```

### 响应格式

所有 API 返回 JSON 格式，基础结构如下：

```json
{
  "code": 0,        // 0 表示成功，其他为错误码
  "data": {...},    // 返回数据
  "message": "..."  // 错误信息（仅在出错时）
}
```

### CORS 支持

所有 API 支持跨域请求：

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## 搜索 API

### GET /api/search

搜索歌曲、歌手、专辑或歌单。

#### 请求参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|:----:|--------|------|
| `keyword` | string | ✅ | - | 搜索关键词 |
| `type` | string | - | `song` | 搜索类型 |
| `num` | int | - | `20` | 返回数量 (1-100) |
| `page` | int | - | `1` | 页码 |

#### type 可选值

| 值 | 说明 |
|----|------|
| `song` | 搜索歌曲 |
| `singer` | 搜索歌手 |
| `album` | 搜索专辑 |
| `playlist` | 搜索歌单 |

#### 请求示例

```bash
GET /api/search?keyword=周杰伦&type=song&num=10&page=1
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "list": [
      {
        "mid": "0039MnYb0qxYhV",
        "id": 97773,
        "title": "晴天",
        "singer": [
          {
            "mid": "0025NhlN2yWrP4",
            "name": "周杰伦"
          }
        ],
        "album": {
          "mid": "002fRO0N4FftzY",
          "name": "叶惠美"
        },
        "interval": 269,
        "pay": {
          "pay_play": 1
        }
      }
    ],
    "total": 1000
  }
}
```

---

## 歌曲 API

### GET /api/song/url

获取歌曲播放链接。

#### 请求参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|:----:|--------|------|
| `mid` | string | ✅ | - | 歌曲 MID，多个用逗号分隔 |
| `quality` | string | - | `128` | 音质 |

#### quality 可选值

| 值 | 说明 | 格式 |
|----|------|------|
| `128` | 标准音质 | MP3 128kbps |
| `320` | 高品质 | MP3 320kbps |
| `flac` | 无损音质 | FLAC |

#### 请求示例

```bash
# 单首歌曲
GET /api/song/url?mid=0039MnYb0qxYhV&quality=320

# 多首歌曲
GET /api/song/url?mid=0039MnYb0qxYhV,004Z8Ihr0JIu5s&quality=flac
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "0039MnYb0qxYhV": "https://isure.stream.qqmusic.qq.com/..."
  }
}
```

---

### GET /api/song/detail

获取歌曲详细信息。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `mid` | string | ✅* | 歌曲 MID |
| `id` | int | ✅* | 歌曲 ID |

> *`mid` 和 `id` 二选一，优先使用 `mid`

#### 请求示例

```bash
GET /api/song/detail?mid=0039MnYb0qxYhV
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "mid": "0039MnYb0qxYhV",
    "id": 97773,
    "title": "晴天",
    "singer": [...],
    "album": {...},
    "interval": 269,
    "genre": 1,
    "language": 0,
    "publish_date": "2003-07-31"
  }
}
```

---

## 歌词 API

### GET /api/lyric

获取歌词，自动解密 LRC/QRC 格式。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `mid` | string | ✅* | 歌曲 MID |
| `id` | int | ✅* | 歌曲 ID |

#### 请求示例

```bash
GET /api/lyric?mid=0039MnYb0qxYhV
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "lyric": "[00:00.00]晴天 - 周杰伦\n[00:01.00]词：周杰伦\n...",
    "trans": "[00:00.00]Sunny Day\n..."
  }
}
```

#### 说明

- `lyric`: 原版歌词 (LRC 格式)
- `trans`: 翻译歌词 (如有)

---

## 专辑 API

### GET /api/album

获取专辑详情及歌曲列表。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `mid` | string | ✅ | 专辑 MID |

#### 请求示例

```bash
GET /api/album?mid=002fRO0N4FftzY
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "mid": "002fRO0N4FftzY",
    "name": "叶惠美",
    "singer": {...},
    "publish_date": "2003-07-31",
    "song_count": 11,
    "songs": [...]
  }
}
```

---

## 歌单 API

### GET /api/playlist

获取歌单详情及歌曲列表。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `id` | int | ✅ | 歌单 ID |

#### 请求示例

```bash
GET /api/playlist?id=8052190267
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "id": 8052190267,
    "name": "周杰伦精选",
    "creator": {...},
    "song_count": 50,
    "songs": [...]
  }
}
```

---

## 歌手 API

### GET /api/singer

获取歌手信息及热门歌曲。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `mid` | string | ✅ | 歌手 MID |

#### 请求示例

```bash
GET /api/singer?mid=0025NhlN2yWrP4
```

#### 响应示例

```json
{
  "code": 0,
  "data": {
    "mid": "0025NhlN2yWrP4",
    "name": "周杰伦",
    "fans": 10000000,
    "songs": [...]
  }
}
```

---

## 排行榜 API

### GET /api/top

获取排行榜列表或指定排行榜歌曲。

#### 请求参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|:----:|------|
| `id` | int | - | 排行榜 ID，不传则返回榜单列表 |
| `num` | int | - | 返回歌曲数量 (默认 100) |

#### 常用排行榜 ID

| ID | 名称 |
|----|------|
| 4 | 巅峰榜·流行指数 |
| 26 | 巅峰榜·热歌 |
| 27 | 巅峰榜·新歌 |
| 62 | 巅峰榜·网络歌曲 |

#### 请求示例

```bash
# 获取排行榜列表
GET /api/top

# 获取指定排行榜
GET /api/top?id=4&num=50
```

---

## 错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 400 | 参数错误 |
| 401 | 凭证无效 |
| 404 | 资源不存在 |
| 500 | 服务器错误 |
