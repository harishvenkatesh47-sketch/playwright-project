
class books_loc {
    constructor(page){
        this.bookbtn1 = page.locator('//a[@href="/books"]').nth(0)
        this.bookdd1 = page.locator('select[id="products-orderby"]')
        this.addtocartbtn = page.locator('input[class="button-2 product-box-add-to-cart-button"]').nth(1)
        this.shoppingcartbtn = page.locator('//span[text()="Shopping cart"]')
        this.checkbox1 = page.locator('input[name="removefromcart"]')
        this.seleccountrydd = page.locator('select[id="CountryId"]')
        //this.seleccountrydd1 = page.locator('select[id="CountryId"]')
        this.zipcodebox = page.locator('input[id="ZipPostalCode"]')
        this.checkbox2 = page.locator('input[id="termsofservice"]')
        this.checkbtn = page.locator('button[id="checkout"]')


    }
}
export default books_loc