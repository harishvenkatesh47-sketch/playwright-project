import {expect, test} from "@playwright/test"
import {login} from "../Utilities/business_login"
import books_loc from "../POM/book_loc"
import bill_loc from "../POM/billing_loc"
import payment_loc from "../POM/payment_loc"
test("books",async ({page}) => {
    await login(page)
    let Book = new books_loc(page)
    let bill = new bill_loc(page)
    let pay = new payment_loc(page)
    await Book.bookbtn1.click()
    await Book.bookdd1.click()
    await Book.bookdd1.selectOption({index: 1});
    await page.waitForTimeout(5000)
    await expect(page.locator('//strong[text()="Filter by price"]')).toHaveText("Filter by price");
    await page.waitForTimeout(3000)
    await Book.addtocartbtn.click()
    await Book.shoppingcartbtn.click()
    await page.waitForTimeout(3000)
    await Book.checkbox1.click()
    await Book.seleccountrydd.selectOption({ label: "India" });
    await page.waitForTimeout(3000)
    await Book.zipcodebox.fill("560037")
    await Book.checkbox2.click()
    await Book.checkbtn.click()
    //await page.waitForTimeout(3000)
    //billing address
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