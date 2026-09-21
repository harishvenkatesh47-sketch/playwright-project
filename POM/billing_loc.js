import { title } from "process"

class bill_loc{
    constructor(page){
        this.addressdd = page.locator('select[id="billing-address-select"]')
        this.seleccountrydd2 = page.locator('select[id="BillingNewAddress_CountryId"]')
        this.city = page.locator('input[id="BillingNewAddress_City"]')
        this.address1 = page.locator('input[id="BillingNewAddress_Address1"]')
        this.address2 = page.locator('input[id="BillingNewAddress_Address2"]')
        this.zipcode2 = page.locator('input[id="BillingNewAddress_ZipPostalCode"]')
        this.phone = page.locator('input[id="BillingNewAddress_PhoneNumber"]')
        this.fax = page.locator('input[id="BillingNewAddress_FaxNumber"]')
        this.continuebtn = page.locator('#billing-buttons-container').getByRole('button', { name: 'Continue' })
        this.checkbox3 = page.locator('input[id="PickUpInStore"]')
        this.continuebtn1 = page.getByRole('button', { title: 'Continue' }).nth(1)
        
    }
}
export default bill_loc