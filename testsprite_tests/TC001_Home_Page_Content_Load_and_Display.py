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
        # -> Test that the newsletter subscription form accepts input in the email field
        frame = context.pages[-1]
        # Input a test email into the newsletter subscription form's email field to verify it accepts input
        elem = frame.locator('xpath=html/body/div[6]/div/div/div[6]/form/div/div/div/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('test@example.com')
        

        # -> Confirm the presence of a submit or subscribe button for the newsletter form
        frame = context.pages[-1]
        # Click the Subscribe button on the newsletter subscription form to verify it is present and clickable
        elem = frame.locator('xpath=html/body/div[6]/div/div/div[6]/form/div/div[5]/div/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=E-Konsul — Digital Consultation Platform').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Otomatisasi Tanpa Batas: Yuk Kenalan Dengan N8Nn8n').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Muhammad Kholis').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Founder & Lead Developer').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Subscribe to Parzello\'s Newsletter').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    