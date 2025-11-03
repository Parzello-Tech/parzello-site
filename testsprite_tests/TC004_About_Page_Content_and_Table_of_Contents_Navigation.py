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
        # -> Click on the About link to navigate to the About page
        frame = context.pages[-1]
        # Click on the About link in the navigation bar to go to the About page
        elem = frame.locator('xpath=html/body/header/div[2]/div/div/div[2]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the 'Introduction' link in the table of contents to test navigation and smooth scroll behavior
        frame = context.pages[-1]
        # Click on the 'Introduction' link in the table of contents to navigate to the Introduction section
        elem = frame.locator('xpath=html/body/div[6]/div/div/div/div/div/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Try clicking the 'Technical Skills' link in the table of contents to check if any navigation works, or report the issue if it also fails.
        frame = context.pages[-1]
        # Click on the 'Technical Skills' link in the table of contents to test navigation and smooth scroll behavior
        elem = frame.locator('xpath=html/body/div[6]/div/div/div/div/div[3]/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click on the 'Background' link in the table of contents to verify if it scrolls correctly to the Background section and confirm smooth scroll behavior.
        frame = context.pages[-1]
        # Click on the 'Background' link in the table of contents to test navigation and smooth scroll behavior
        elem = frame.locator('xpath=html/body/div[6]/div/div/div/div/div[2]/div').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Parzello Tech adalah kolaborasi antara startup dan digital agency yang berfokus pada pengembangan aplikasi web dan mobile. Kami menghadirkan solusi digital inovatif dengan mengutamakan efisiensi, tampilan modern, serta pengalaman pengguna yang menyenangkan.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tim inti Parzello Tech berasal dari mahasiswa dan alumni jurusan Teknologi Informasi dan Komputer, dengan fokus di bidang pengembangan aplikasi dan sistem informasi di Politeknik Negeri Lhokseumawe.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Anggota tim aktif mengembangkan berbagai proyek independen untuk memperdalam kemampuan di Flutter, Next.js, dan sistem berbasis Firebase.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mengembangkan aplikasi lintas platform dengan Flutter, serta integrasi cloud menggunakan Firebase Authentication, Firestore, dan Storage.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Membangun website dan dashboard modern menggunakan Next.js, Once UI, dan Supabase sebagai backend-as-a-service.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Flutter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Firebase').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Next.js').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Supabase').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=TypeScript').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Introduction').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Background').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Technical Skills').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    