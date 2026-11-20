import os,asyncio,sys
from playwright.async_api import async_playwright
HERE=os.path.dirname(os.path.abspath(__file__))
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--font-render-hinting=none"])
        for mode,(w,h),out in [("h",(1920,1080),sys.argv[1]+"_封面_横版.png"),("v",(1080,1440),sys.argv[1]+"_封面_竖版3比4.png")]:
            pg=await b.new_page(viewport={"width":w,"height":h});await pg.goto("file://"+HERE+"/cover.html");await pg.evaluate(f"render('{mode}')");await pg.locator("canvas").screenshot(path=f"{HERE}/{out}");await pg.close()
        await b.close()
asyncio.run(main())
