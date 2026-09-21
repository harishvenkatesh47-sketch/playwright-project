import {test} from "@playwright/test"
import { login } from "../Utilities/business_login"
import login_loc from "../POM/login_loc"
test("logingin",async ({page}) => {
    await login(page)
    //login to app from from business utility
    let login1 = new login_loc(page)
    await login1.emaillogin.fill("harishvenkatesh4@gmail.com")
    await login1.passwordlogin.fill("Jesu@143")
    await login1.lgoinbtn1.click()
    await page.waitForTimeout(3000)

    
})