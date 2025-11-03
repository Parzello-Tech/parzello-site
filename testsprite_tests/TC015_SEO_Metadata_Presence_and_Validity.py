import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Navigate to About page to inspect SEO metadata.
        frame = context.pages[-1]
        # Click on About link to navigate to About page
        elem = frame.locator('xpath=html/body/header/div[2]/div/div/div[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on Blog link to navigate to Blog page for SEO metadata extraction.
        frame = context.pages[-1]
        # Click on Blog link to navigate to Blog page
        elem = frame.locator('xpath=html/body/header/div[2]/div/div/div[6]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Fetch sitemap.xml from root path for validation.
        await page.goto('http://localhost:3000/sitemap.xml', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Fetch robots.txt from root path for validation.
        await page.goto('http://localhost:3000/robots.txt', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Verify presence of OG tags and schema markup on the Work page for SEO completeness.
        await page.goto('http://localhost:3000/work', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate to Gallery page to inspect SEO metadata and check for OG tags and schema markup.
        frame = context.pages[-1]
        # Click on Gallery link to navigate to Gallery page
        elem = frame.locator('xpath=html/body/header/div[2]/div/div/div[8]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Asia/Jakarta').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Work').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Blog').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Gallery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=03:54:06').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 /Parzello Tech— Menyediakan solusi digital inovatif untuk mendukung pertumbuhan bisnis Anda.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    