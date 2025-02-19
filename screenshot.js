const puppeteer = require('puppeteer');

(async () => {
  let browser;
  try {
    // Launch browser with required settings
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
      // Optional: Add additional browser arguments here if needed
      // args: [
      //   '--no-sandbox',
      //   '--disable-setuid-sandbox',
      //   '--disable-web-security',
      //   '--disable-features=IsolateOrigins',
      //   '--disable-site-isolation-trials'
      // ]
    });

    const page = await browser.newPage();

    // Configure viewport settings
    await page.setViewport({ 
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2  // Adjust for higher resolution screenshots
    });

    // Navigate to the target website
    // Adjust waitUntil condition based on your needs:
    // - 'domcontentloaded' : faster, basic HTML loaded
    // - 'networkidle0'     : slower, waits for all network activity
    // - 'networkidle2'     : balanced, waits for most content
    await page.goto('https://artificialanalysis.ai/', { 
      waitUntil: 'networkidle0'
    });

    /* Optional Features (uncomment and customize as needed) */

    // 1. Force color scheme (it is lightmode by default in most places btw)
    // await page.emulateMediaFeatures([
    //   { name: 'prefers-color-scheme', value: 'dark' }  // or 'light'
    // ]);

    // 2. Add custom styles (a bit glitchy from my usecase, but if you figure it out, works wonders)
    // await page.addStyleTag({
    //   content: `
    //     /* Add your custom CSS here */
    //     body {
    //       /* Custom styles */
    //     }
    //   `
    // });

    // 3. Wait for specific element
    // await page.waitForSelector('.some-class');

    // 4. Custom delay if needed
    // await new Promise(resolve => setTimeout(resolve, 2000));

    // 5. Multiple screenshots example 
    // For capturing multiple pages:
    // const urls = [
    //   'https://example1.com',
    //   'https://example2.com'
    // ];
    // 
    // for (const [index, url] of urls.entries()) {
    //   await page.goto(url, { waitUntil: 'domcontentloaded' });
    //   await page.screenshot({ 
    //     path: `screenshot-${index + 1}.png`,
    //     fullPage: true
    //   });
    // }

    // Take screenshot
    await page.screenshot({ 
      path: 'screenshot.png',
      fullPage: true
      // Optional: Capture specific area only
      // clip: {
      //   x: 0,
      //   y: 0,
      //   width: 1920,
      //   height: 1080
      // }
    });

  } catch (error) {
    console.error('An error occurred:', error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})().catch(error => {
  console.error('Script failed:', error);
  process.exit(1);
});