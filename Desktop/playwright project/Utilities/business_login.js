import login_loc from "../POM/login_loc";
export async function login(page) {
    await page.goto('https://demowebshop.tricentis.com/')
    await page.locator('//a[text()="Log in"]').click()
    await page.waitForTimeout(3000)

    let Login = new login_loc(page);
    await Login.emaillogin.fill("harishvenkatesh4@gmail.com");
    await Login.passwordlogin.fill("Jesu@143");
    await Login.loginbtn1.click();

    
}