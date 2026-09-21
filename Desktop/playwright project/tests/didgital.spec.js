import {test} from "@playwright/test"
import { login } from "../Utilities/business_login"
import digital_loc from "../POM/didgtial_loc.js"
import bill_loc from "../POM/billing_loc"
import payment_loc from "../POM/payment_loc"
test("digital",async ({page}) => {
    await login(page)
    let dig = new digital_loc(page)
    let bill = new bill_loc(page)
    let pay = new payment_loc(page)
    await dig.digitaltab.click()
    await dig.addtocart.click()
    await dig.shoppingcartbtn.click()
    await dig.checkbox1.click()
    await dig.checkbox2.click()
    await dig.checkout.click()

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
    

    //payment method
    await page.waitForTimeout(1000)
    await pay.cod.check()
    await page.locator('input[class="button-1 payment-method-next-step-button"]').click()
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