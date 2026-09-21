import {test} from "@playwright/test"
import { login } from "../Utilities/business_login"
import computer_loc from "../POM/computer_loc"
import bill_loc from "../POM/billing_loc"
import payment_loc from "../POM/payment_loc"
test("computers",async ({page}) => {
    await login(page)
    let comp = new computer_loc(page)
    let bill = new bill_loc(page)
    let pay = new payment_loc(page)
    await comp.computertab.nth(1).click()
    await comp.seldesktop.click()
    await comp.dd1.selectOption({index: 1});
    await page.waitForTimeout(3000)
    await comp.addtocartbtn.nth(1).click()
    await page.waitForTimeout(3000)
    await comp.addtocartbtn1.click()
    await comp.shoppingcartbtn.click()
    await comp.checkbox1.click()
    await comp.selectcountrydd.selectOption({ label: "India" });
    await comp.zipcodebox.fill("560037")
    await comp.checkbox2.click()
    await comp.checkoutbtn.click()

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