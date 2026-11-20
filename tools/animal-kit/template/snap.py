import sys,os,asyncio
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__))
TS=[float(x) for x in sys.argv[1].split(',')]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--font-render-hinting=none"]);pg=await b.new_page(viewport={"width":1920,"height":1080})
        msgs=[];pg.on("console",lambda m:msgs.append(m.text));pg.on("pageerror",lambda e:msgs.append(str(e)))
        await pg.goto("file://"+HERE+"/index.html");await pg.evaluate("window.ready")
        os.makedirs(HERE+"/snaps",exist_ok=True)
        for i,t in enumerate(TS):
            await pg.evaluate(f"draw({t})");await pg.locator("canvas").screenshot(path=f"{HERE}/snaps/{i:02d}.jpg",type="jpeg",quality=85)
        print(msgs);await b.close()
asyncio.run(main())
