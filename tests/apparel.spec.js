import {expect, test} from "@playwright/test"
import { login } from "../Utilities/business_login"
import apparel_loc from "../POM/apparel_loc"
import bill_loc from "../POM/billing_loc"
import payment_loc from "../POM/payment_loc"

test("apparel",async ({page}) => {
    await login(page)
    let app = new apparel_loc(page)
    let bill = new bill_loc(page)
    let pay = new payment_loc(page)
    await app.appareltab.click()
    await expect (page.locator('//h1[text()="Apparel & Shoes"]')).toHaveText("Apparel & Shoes");
    await app.addtocartbtn.click()
    await page.waitForTimeout(2000)
    await app.addtocartbtn1.click()
    await app.shoppingcartbtn.click()
    await app.checkbox1.click()
    await app.selectcountrydd.selectOption({ label: "India" });
    await app.zipcodebox.fill("560037")
    await app.checkbox2.click()
    await app.checkoutbtn.click()

    //billing page
    await bill.addressdd.selectOption({label: "New Address"});
    await bill.seleccountrydd2.selectOption({label: "India"});
    await bill.city.fill("bangalore")
    await bill.address1.fill("marathalli,bangalore")
    await bill.address2.fill("marathalli,bangalore")
    await bill.zipcode2.fill("560037")
    await bill.phone.fill("7834952935")
    await bill.fax.fill("1234567890")
    await bill.continuebtn.click()
    //await page.waitForTimeout(3000)
    await bill.checkbox3.click()
    await bill.continuebtn1.click()

    //payment method
    await page.waitForTimeout(1000)
    await pay.cod.check()
    await pay.continue3.click()
    await page.waitForTimeout(1000)

    //payment info
    await page.locator('//*[@id="payment-info-buttons-container"]/input').click()
    //await page.waitForTimeout(1000)

    //confirm order
    await page.locator('//*[@id="confirm-order-buttons-container"]/input').click()
    await page.waitForTimeout(1000)

    //thank you order
    await page.locator('input[class="button-2 order-completed-continue-button"]').click()
    //await page.waitForTimeout(1000)


    
})