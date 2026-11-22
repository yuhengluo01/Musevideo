# 视频生产工具包（人间动物志 等 29 秒发光线描系列）

给定时任务用的完整流水线。每期 29.36 秒、1920×1080、发光线描画风，固定 BGM（`bgm/BGM片段_21.9s-51.2s.mp3`），代码画布逐帧渲染。

## 目录
- `pig/` 公共底座：head.js（W/H/GY=935、glow/circ/Q/partial/seg/lerp/eOut/eBack 等）、extra.js、caps.js（caption 字幕）、tail.js。
- `template/` 一期的工程模板：pre.js（节拍网格与卡点常量）、rig.js（火柴人+bubble/wordBox/heartF/shards/sparks/shock/rain/bolt）、**chars.js（可复用角色：tiger 笑面虎、bunny 小白兔、ox 老黄牛、arm 工具）**、boy.js（知识探索者片尾卡）、index.html、render.py、snap.py、audio.py、bgs.py、cover.html、coverrender.py、build.sh、scene.js（示例=墙头草）。
- `examples/` 已发布各期场景脚本：ep1 出头鸟（bird 小鸟角色+电线）、ep2 笑面虎、ep3 老黄牛、ep4 墙头草。新角色可参考 bird()/tiger()/ox()/grass() 的写法。

## 时间网格（pre.js 已定义，直接用）
B(n)=(n-1)*2.6666 秒。开头 0–8 秒（B1–B4）一笔笔画出主角 → DROP=B(4)=8.0 标题爆出 → 四段：01=B5–B6（卡点 MK[0..2]）、02=B6–B7（WAVES[0..1]、LOCK）、03=B7–B8（JABS[]、STAMP 大字）、04=B8–B9（SNAPS[]、SLAM 爆发）→ 风暴 B9–CLIMAX（下雨、四个负面词绕圈、主角低谷）→ CLIMAX=B(10)=24.0 高潮反转 → B(11) 片尾字幕 → 27.45 片尾卡 boyCard。

## 一期的固定结构（人间动物志）
- 开头：特写里一笔笔画出主角（prog 0→1），镜头拉远出配角/场景，跟鼓点出事件，最后一句成语/俗语逐字砸下进 DROP。
- 标题：中文名 + 英文小字 + 「人间动物志 · 第N期」+ 四段关键词。HUD 左上：「人间动物志 · XXX」「第N期 · 每种人，都是一种动物」。
- 01、02 两段表现；03 好的一面（STAMP 金色大字）；04 坏的一面（SLAM 爆发+一句白色大字）；风暴主角自问；高潮正向反转 + 金色放射光 + 大字两行（白小字+渐变大字）；B11 片尾一句。
- 字幕 15 句：开头 5 句（.05–H2(1)、H2(1)–B2、B2–H2(2)、H2(2)–B3、B3–DROP），四段各 2 句（带 ['01','段名',色] 标签），风暴 2 句。字幕越多越好、跟节奏走。
- 配角可复用 chars.js 里的笑面虎/小白兔/老黄牛（系列宇宙感）。

## 制作步骤
1. `cp -r template ep_<拼音>`（要在 animal-kit/ 下，和 pig/ bgm/ 同级），在里面写 `scene.js`（参考 examples）。
2. `bash build.sh` 语法检查。**常见坑**：keyframe 数组先用 `[...]` 再 `.push(...)` 时结尾要写 `]);` 而不是 `]];`；不要重复声明已在 pig/rig/chars 里的 const（如 RED、FX、OC、TC、BUN、GRN、TAU）——改名或删掉。
3. 抽帧自检：`python3 snap.py 0.3,0.9,...` → snaps/NN.jpg，拼成 8×6 联系表看：角色要够大（主角 scale≈1.5，相机 zoom≈1，相机 y≈600，GY=935），文字/气泡别挡脸、别出画、别压右侧字幕区（x>1300 屏幕坐标）。改到满意。
4. 音效：改 audio.py 里 `add(.25,dingdong(),.5)` 到 `add(27.45,dingdong(),.4)` 之间的事件，跟画面卡点（参考 examples/ep4_audio.py），`python3 audio.py` 生成 audio.wav。
5. 渲染（约 4–6 分钟，务必前台等完；后台任务在回复后会被杀）：
   ```
   rm -rf parts && python3 render.py && ls parts/s*.mp4 | grep -v tmp | sed "s/.*/file '&'/" > list.txt && ffmpeg -y -loglevel error -f concat -safe 0 -i list.txt -c copy v.mp4 && ffmpeg -y -loglevel error -i v.mp4 -i audio.wav -c:v copy -c:a aac -b:a 192k -shortest OUT.mp4
   ```
   时长应为 29.36 秒。
6. 封面：改 cover.html 第 3 行 `const C={letters:[[字,色,小标签],...],title:'四字主标题',grad:[...],glow,pill:'人间动物志 · 第N期',pillCol,line1:'你身边',hook:['有没有','XXX？'],hi}`；改 bgs.py 里 `draw(t)` 选一个没有大字/冲击波的画面、两组 camS 覆盖值（横版/竖版）；`python3 bgs.py && python3 coverrender.py 前缀` → 前缀_封面_横版.png / 前缀_封面_竖版3比4.png。
7. 推送：见仓库根目录规则——mp4 → `videos/YYYY-MM-DD-拼音.mp4`，竖版封面 → `videos/YYYY-MM-DD-拼音-cover.png`，`videos.json` 的 videos 数组末尾追加 {id,file,cover,title,caption,tags(3个，不带#),date}，不删旧条目；commit 后 push 到 main；单文件 <100MB。
8. 更新 `tools/series_state.json`（done 里加上，queue 里删掉）并一起提交。

## 快捷方式（第五期起）
- `common_tail.js`：通用画面骨架（背景/镜头/冲击波/高潮放射光/HUD/标题/15句字幕/片尾卡）。每期只需写 `ep.js`：定义 `EP` 配置（name/en/epn/acc/grad/kw/words/cams/sky/caps/tags/cl/endCap）和 `epWorld(S)`（画角色、道具、气泡、bigText 大字，并设置 `FOC=[x,y]` 为主角焦点）。
- 在 ep 目录里 `bash ../mk.sh` = 合成 scene.js（ep.js + common_tail.js）+ build 检查 + 抽 48 帧拼 sheet.jpg；`bash ../mk.sh 9.0,17.8` 只抽指定时间。
- 例子：examples/ep5_tizuiyang.js（替罪羊+黑锅叠罗汉）、ep6_jingdizhiwa.js（井底之蛙+井的剖面）、ep7_ciwei.js（刺猬+刺的炸开）、ep8_tiegongji.js（铁公鸡+硬币堆），及各自 epN_audio.py。
- 坑：chars.js 的 bunny/ox/tiger 在 a≤.01 时返回 null，用 `||{hx,hy}` 兜底；配角 keyframe 想在某段隐身，要在出场前再加一帧 a:0，否则会慢慢淡入。

## 当代人图鉴（第十七期起）
- 主角用 rig.js 火柴人：`kfS(KP,T)` + `drawStick(po,t,col,prog)`（SP 参数 lean/hd/fax/fay/bax/bay/exp/sq），开头 prog 0→1 一笔笔画出；配角仍用 chars.js。
- EP 里加 `series:'当代人图鉴', slogan:'每种状态，都是一种活法'`，common_tail 会改 HUD/标题/片尾卡。
- 例子：examples/ep17_taohao.js（讨好型人格）、ep18_aoye.js（报复性熬夜+时钟道具+手机 phone(G,a)）。
