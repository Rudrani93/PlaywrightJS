const{test,expect} = require('@playwright/test')

test("Valid Login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").pressSequentially("Admin",{delay:200})
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    //await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/)
    await page.locator("//p[contains(text(),'manda user')]").click()
    await page.locator("//a[.='Logout']").click()
    //await page.waitForTimeout(5000)
    await expect(page.locator("//p[text()='Username : Admin']")).toHaveText(/Admin/)
})