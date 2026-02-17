# 调用示例

完整的端到端调用示例，展示如何使用 QQ Music API。

> 以下示例的 Base URL 为 `https://api.ygking.top`，请替换为你自己的部署地址。

## 典型流程：搜索 → 播放

一个完整的音乐播放流程通常是：**搜索歌曲** → **获取播放链接** → **获取歌词**（可选）→ **获取封面**（可选）。

---

## 1. 搜索歌曲

搜索"周杰伦"的歌曲，返回前 5 条结果。

::: code-group

```bash [cURL]
curl "https://api.ygking.top/api/search?keyword=周杰伦&type=song&num=5"
```

```javascript [JavaScript]
const res = await fetch('https://api.ygking.top/api/search?keyword=周杰伦&type=song&num=5')
const data = await res.json()

// 获取第一首歌的 mid
const firstSong = data.data.list[0]
console.log(`${firstSong.title} - ${firstSong.singer[0].name}`)
console.log(`MID: ${firstSong.mid}`)
```

```python [Python]
import requests

res = requests.get('https://api.ygking.top/api/search', params={
    'keyword': '周杰伦',
    'type': 'song',
    'num': 5
})
data = res.json()

# 获取第一首歌的 mid
first_song = data['data']['list'][0]
print(f"{first_song['title']} - {first_song['singer'][0]['name']}")
print(f"MID: {first_song['mid']}")
```

:::

**返回示例：**

```json
{
  "code": 0,
  "data": {
    "list": [
      {
        "mid": "0039MnYb0qxYhV",
        "id": 97773,
        "title": "晴天",
        "singer": [{ "mid": "0025NhlN2yWrP4", "name": "周杰伦" }],
        "album": { "mid": "002fRO0N4FftzY", "name": "叶惠美" },
        "interval": 269
      }
    ],
    "total": 1000
  }
}
```

---

## 2. 获取播放链接

用搜索到的 `mid` 获取歌曲播放链接。

::: code-group

```bash [cURL]
# 单首 - 320kbps
curl "https://api.ygking.top/api/song/url?mid=0039MnYb0qxYhV&quality=320"

# 批量 - FLAC
curl "https://api.ygking.top/api/song/url?mid=0039MnYb0qxYhV,004Z8Ihr0JIu5s&quality=flac"
```

```javascript [JavaScript]
const mid = '0039MnYb0qxYhV'
const res = await fetch(`https://api.ygking.top/api/song/url?mid=${mid}&quality=320`)
const data = await res.json()

const url = data.data[mid]
console.log(`播放链接: ${url}`)

// 用 Audio 播放
const audio = new Audio(url)
audio.play()
```

```python [Python]
import requests

mid = '0039MnYb0qxYhV'
res = requests.get('https://api.ygking.top/api/song/url', params={
    'mid': mid,
    'quality': '320'
})
data = res.json()

url = data['data'][mid]
print(f"播放链接: {url}")
```

:::

**返回示例：**

```json
{
  "code": 0,
  "data": {
    "0039MnYb0qxYhV": "https://isure.stream.qqmusic.qq.com/..."
  }
}
```

---

## 3. 获取歌词

获取歌词，支持多种格式。

::: code-group

```bash [cURL]
# 基础歌词
curl "https://api.ygking.top/api/lyric?mid=0039MnYb0qxYhV"

# 逐字歌词 + 翻译 + 罗马音
curl "https://api.ygking.top/api/lyric?mid=0039MnYb0qxYhV&qrc=1&trans=1&roma=1"
```

```javascript [JavaScript]
const res = await fetch('https://api.ygking.top/api/lyric?mid=0039MnYb0qxYhV&trans=1')
const data = await res.json()

console.log('歌词:', data.data.lyric)
console.log('翻译:', data.data.trans)
```

```python [Python]
import requests

res = requests.get('https://api.ygking.top/api/lyric', params={
    'mid': '0039MnYb0qxYhV',
    'qrc': 1,
    'trans': 1,
    'roma': 1
})
data = res.json()

print('歌词:', data['data']['lyric'])
if data['data'].get('trans'):
    print('翻译:', data['data']['trans'])
if data['data'].get('roma'):
    print('罗马音:', data['data']['roma'])
```

:::

**返回示例：**

```json
{
  "code": 0,
  "data": {
    "lyric": "[00:00.00]晴天 - 周杰伦\n[00:01.00]词：周杰伦\n...",
    "trans": "[00:00.00]Sunny Day\n..."
  }
}
```

> **参数说明：** `qrc=1` 返回 QRC XML 逐字歌词；`trans=1` 返回翻译歌词；`roma=1` 返回罗马音歌词（XML 格式）。

---

## 4. 获取封面

获取歌曲或专辑封面图片。

::: code-group

```bash [cURL]
# 通过歌曲 MID（自动获取专辑封面）
curl "https://api.ygking.top/api/song/cover?mid=0039MnYb0qxYhV&size=300"

# 通过专辑 MID
curl "https://api.ygking.top/api/song/cover?album_mid=002fRO0N4FftzY&size=500"
```

```javascript [JavaScript]
// 作为 <img> 的 src 直接使用（API 返回 302 重定向到图片）
const coverUrl = 'https://api.ygking.top/api/song/cover?mid=0039MnYb0qxYhV&size=300'

const img = document.createElement('img')
img.src = coverUrl
document.body.appendChild(img)
```

```python [Python]
import requests

# 获取封面 URL（跟随重定向）
res = requests.get('https://api.ygking.top/api/song/cover', params={
    'mid': '0039MnYb0qxYhV',
    'size': 300
})

# 保存封面图片
with open('cover.jpg', 'wb') as f:
    f.write(res.content)
print('封面已保存')
```

:::

> **可用尺寸：** `150`、`300`（默认）、`500`、`800`

---

## 5. 获取歌曲详情

::: code-group

```bash [cURL]
# 通过 MID
curl "https://api.ygking.top/api/song/detail?mid=0039MnYb0qxYhV"

# 通过 ID
curl "https://api.ygking.top/api/song/detail?id=97773"
```

```javascript [JavaScript]
const res = await fetch('https://api.ygking.top/api/song/detail?mid=0039MnYb0qxYhV')
const data = await res.json()

const song = data.data
console.log(`${song.title} - ${song.singer.map(s => s.name).join('/')}`)
console.log(`专辑: ${song.album.name}`)
console.log(`时长: ${Math.floor(song.interval / 60)}:${(song.interval % 60).toString().padStart(2, '0')}`)
```

```python [Python]
import requests

res = requests.get('https://api.ygking.top/api/song/detail', params={
    'mid': '0039MnYb0qxYhV'
})
song = res.json()['data']

singers = '/'.join(s['name'] for s in song['singer'])
print(f"{song['title']} - {singers}")
print(f"专辑: {song['album']['name']}")
print(f"发布日期: {song['publish_date']}")
```

:::

---

## 6. 获取专辑详情

::: code-group

```bash [cURL]
curl "https://api.ygking.top/api/album?mid=002fRO0N4FftzY"
```

```javascript [JavaScript]
const res = await fetch('https://api.ygking.top/api/album?mid=002fRO0N4FftzY')
const album = (await res.json()).data

console.log(`专辑: ${album.name}`)
console.log(`歌曲数: ${album.song_count}`)
album.songs.forEach((song, i) => {
  console.log(`  ${i + 1}. ${song.title}`)
})
```

```python [Python]
import requests

res = requests.get('https://api.ygking.top/api/album', params={
    'mid': '002fRO0N4FftzY'
})
album = res.json()['data']

print(f"专辑: {album['name']}")
print(f"歌曲数: {album['song_count']}")
for i, song in enumerate(album['songs'], 1):
    print(f"  {i}. {song['title']}")
```

:::

---

## 7. 获取歌单详情

::: code-group

```bash [cURL]
curl "https://api.ygking.top/api/playlist?id=8052190267"
```

```javascript [JavaScript]
const res = await fetch('https://api.ygking.top/api/playlist?id=8052190267')
const playlist = (await res.json()).data

console.log(`歌单: ${playlist.name}`)
console.log(`歌曲数: ${playlist.song_count}`)
playlist.songs.forEach((song, i) => {
  console.log(`  ${i + 1}. ${song.title} - ${song.singer[0].name}`)
})
```

```python [Python]
import requests

res = requests.get('https://api.ygking.top/api/playlist', params={
    'id': 8052190267
})
playlist = res.json()['data']

print(f"歌单: {playlist['name']}")
print(f"歌曲数: {playlist['song_count']}")
for i, song in enumerate(playlist['songs'], 1):
    singers = '/'.join(s['name'] for s in song['singer'])
    print(f"  {i}. {song['title']} - {singers}")
```

:::

---

## 8. 获取歌手信息

::: code-group

```bash [cURL]
curl "https://api.ygking.top/api/singer?mid=0025NhlN2yWrP4"
```

```javascript [JavaScript]
const res = await fetch('https://api.ygking.top/api/singer?mid=0025NhlN2yWrP4')
const singer = (await res.json()).data

console.log(`歌手: ${singer.name}`)
console.log(`粉丝数: ${singer.fans.toLocaleString()}`)
console.log('热门歌曲:')
singer.songs.slice(0, 5).forEach((song, i) => {
  console.log(`  ${i + 1}. ${song.title}`)
})
```

```python [Python]
import requests

res = requests.get('https://api.ygking.top/api/singer', params={
    'mid': '0025NhlN2yWrP4'
})
singer = res.json()['data']

print(f"歌手: {singer['name']}")
print(f"粉丝数: {singer['fans']:,}")
print('热门歌曲:')
for i, song in enumerate(singer['songs'][:5], 1):
    print(f"  {i}. {song['title']}")
```

:::

---

## 9. 获取排行榜

::: code-group

```bash [cURL]
# 获取所有排行榜列表
curl "https://api.ygking.top/api/top"

# 获取指定排行榜前 10 首
curl "https://api.ygking.top/api/top?id=26&num=10"
```

```javascript [JavaScript]
// 获取排行榜列表
const listRes = await fetch('https://api.ygking.top/api/top')
const topList = (await listRes.json()).data
console.log('排行榜列表:')
topList.forEach(t => console.log(`  [${t.id}] ${t.name}`))

// 获取热歌榜前 10
const res = await fetch('https://api.ygking.top/api/top?id=26&num=10')
const songs = (await res.json()).data.songs
songs.forEach((song, i) => {
  console.log(`${i + 1}. ${song.title} - ${song.singer[0].name}`)
})
```

```python [Python]
import requests

# 获取排行榜列表
res = requests.get('https://api.ygking.top/api/top')
top_list = res.json()['data']
print('排行榜列表:')
for t in top_list:
    print(f"  [{t['id']}] {t['name']}")

# 获取热歌榜前 10
res = requests.get('https://api.ygking.top/api/top', params={
    'id': 26,
    'num': 10
})
songs = res.json()['data']['songs']
for i, song in enumerate(songs, 1):
    singers = '/'.join(s['name'] for s in song['singer'])
    print(f"  {i}. {song['title']} - {singers}")
```

:::



