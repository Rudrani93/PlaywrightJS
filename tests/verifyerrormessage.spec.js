const{test,expect} = require('@playwright/test')
test.use({viewport:{width:963,height:500}})
test("Verify Error Message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().height)   
    console.log(await page.viewportSize().width)   
    await page.locator("//input[@name='username']").pressSequentially("Admin")
    await page.getByPlaceholder("Password").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    const errormsg = await page.locator("//p[text()='Invalid credentials']").textContent()
    //await expect(errormsg.includes("Invalid")).toBeTruthy()
    console.log("Error message is "+errormsg)
    expect(errormsg==="Invalid credentials").toBeTruthy()


})