import os,asyncio
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__))
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--font-render-hinting=none"]);pg=await b.new_page(viewport={"width":1920,"height":1080})
        await pg.goto("file://"+HERE+"/index.html");await pg.evaluate("window.ready");await pg.evaluate("window.NOCAP=true")
        for f,cam in [("bg_h.png","[860,600,1.1]"),("bg_v.png","[520,800,.9]")]:
            await pg.evaluate(f"camS=()=>{cam};draw(13.1)");await pg.locator("canvas").screenshot(path=f"{HERE}/{f}")
        await b.close()
asyncio.run(main())
