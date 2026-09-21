import {expect, test} from "@playwright/test"
import {register1} from "../Utilities/business_reg_utility"
import register_loc from "../POM/register_loc";
test("registeration",async ({page}) => {
    //business utility
    await register1(page)

    //pom register loc
    let reg = new register_loc(page);
    await reg.radiobtn.click()
    await reg.firstnametf.fill("Harry")
    await reg.lastnametf.fill("venkatesha")
    await reg.emailtf.fill("harishvenkatesh52@gmail.com")
    await reg.passwordtf.fill("Jesu@143")
    await reg.confirmpwdtf.fill("Jesu@143")
    await reg.submitbtn.click()
    await page.waitForTimeout(3000)
    await reg.contbtn.click()
    await page.waitForTimeout(3000)
    await expect(page.locator('//strong[text()="Featured products"]')).toHaveText("Featured products");
    


    
})