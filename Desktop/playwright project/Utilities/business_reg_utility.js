export async function register1(page) {
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator('//a[text()="Register"]').click()
    await page.waitForTimeout(3000)
    
}