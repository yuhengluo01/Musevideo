import sys, os, subprocess, asyncio
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__)); FPS=30; OFF=0.0; BAR=2.666626
B=lambda n:0 if n<=1 else OFF+(n-1)*BAR
CUTS=[B(n) for n in range(1,12)]+[29.36]
async def one(p,i):
    out=f"{HERE}/parts/s{i:02d}.mp4"
    if os.path.exists(out): return
    b=await p.chromium.launch(args=["--font-render-hinting=none"]);pg=await b.new_page(viewport={"width":1920,"height":1080})
    await pg.goto("file://"+HERE+"/index.html");await pg.evaluate("window.ready");cv=pg.locator("canvas")
    tmp=out.replace(".mp4",".tmp.mp4")
    ff=subprocess.Popen(["ffmpeg","-y","-loglevel","error","-f","image2pipe","-framerate",str(FPS),"-c:v","mjpeg","-i","-","-c:v","libx264","-preset","veryfast","-crf","18","-pix_fmt","yuv420p","-r",str(FPS),tmp],stdin=subprocess.PIPE)
    for f in range(round(CUTS[i]*FPS),round(CUTS[i+1]*FPS)):
        await pg.evaluate(f"window.draw({f/FPS})"); ff.stdin.write(await cv.screenshot(type="jpeg",quality=92))
    ff.stdin.close()
    if ff.wait()!=0: sys.exit(f"scene {i} failed")
    os.replace(tmp,out);await b.close()
async def main():
    os.makedirs(HERE+"/parts",exist_ok=True)
    async with async_playwright() as p:
        idx=list(range(len(CUTS)-1))
        for k in range(0,len(idx),4): await asyncio.gather(*[one(p,i) for i in idx[k:k+4]])
asyncio.run(main())
