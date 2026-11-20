#!/usr/bin/env python3
"""
muse 视频同步脚本
从 GitHub 仓库拉取 videos.json，发现新视频就自动下载到本地。

用法：
  1. 修改下面的配置（仓库名、token、保存目录）
  2. 先手动运行一次测试： python3 muse_video_sync.py
  3. 加入定时任务（每 5 分钟检查一次）：
       crontab -e
       */5 * * * * /usr/bin/python3 /root/muse/muse_video_sync.py >> /root/muse/sync.log 2>&1

只依赖 Python 标准库，不用 pip 安装任何东西。
"""

import json
import os
import urllib.request
import urllib.error
from datetime import datetime

# ============ 配置（改这里） ============
GITHUB_OWNER = "yuhengluo01"
GITHUB_REPO = "Musevideo"
BRANCH = "main"
# 仓库是私有的就填 token（GitHub → Settings → Developer settings →
# Fine-grained tokens，只给这个仓库 Contents: Read-only 权限）；公开仓库留空
GITHUB_TOKEN = os.environ.get("MUSE_GITHUB_TOKEN", "")
SAVE_DIR = "/root/muse/videos"          # 视频保存目录
STATE_FILE = "/root/muse/downloaded.json"  # 记录已下载的视频，避免重复
# =======================================

RAW_BASE = f"https://raw.githubusercontent.com/{GITHUB_OWNER}/{GITHUB_REPO}/{BRANCH}"


def log(msg):
    print(f"[{datetime.now():%Y-%m-%d %H:%M:%S}] {msg}", flush=True)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "muse-sync"})
    if GITHUB_TOKEN:
        req.add_header("Authorization", f"token {GITHUB_TOKEN}")
    return urllib.request.urlopen(req, timeout=60)


def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, encoding="utf-8") as f:
            return set(json.load(f))
    return set()


def save_state(done):
    os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(sorted(done), f, ensure_ascii=False, indent=2)


def download(path, dest):
    tmp = dest + ".part"
    with fetch(f"{RAW_BASE}/{path}") as resp, open(tmp, "wb") as out:
        while chunk := resp.read(1024 * 256):
            out.write(chunk)
    os.replace(tmp, dest)  # 下载完整后才改名，避免半截文件


def main():
    os.makedirs(SAVE_DIR, exist_ok=True)
    try:
        with fetch(f"{RAW_BASE}/videos.json") as resp:
            manifest = json.load(resp)
    except urllib.error.HTTPError as e:
        log(f"读取 videos.json 失败：HTTP {e.code}（检查仓库名/token）")
        return

    done = load_state()
    new_count = 0
    for v in manifest.get("videos", []):
        vid = v["id"]
        if vid in done:
            continue
        filename = os.path.basename(v["file"])
        dest = os.path.join(SAVE_DIR, filename)
        log(f"发现新视频：{v.get('title', vid)}，开始下载…")
        try:
            download(v["file"], dest)
        except Exception as e:
            log(f"  下载失败：{e}，下次再试")
            continue
        # 文案、话题标签存成同名 txt，发抖音时直接复制
        caption = v.get("caption", "")
        tags = " ".join(f"#{t}" for t in v.get("tags", []))
        with open(os.path.splitext(dest)[0] + ".txt", "w", encoding="utf-8") as f:
            f.write(f"{v.get('title', '')}\n\n{caption}\n\n{tags}\n")
        done.add(vid)
        save_state(done)
        new_count += 1
        log(f"  已保存：{dest}")

    log(f"检查完成，新下载 {new_count} 个视频")


if __name__ == "__main__":
    main()
