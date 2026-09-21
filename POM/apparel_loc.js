class apparel_loc{
    constructor(page){
        this.appareltab = page.locator('//a[@href="/apparel-shoes"]').first();
        this.addtocartbtn = page.locator('input[class="button-2 product-box-add-to-cart-button"]').first();
        this.addtocartbtn1 = page.locator('input[id="add-to-cart-button-5"]')
        this.shoppingcartbtn = page.locator('//span[text()="Shopping cart"]')
        this.checkbox1 = page.locator('input[name="removefromcart"]')
        this.selectcountrydd = page.locator('select[id="CountryId"]')
        this.zipcodebox = page.locator('input[id="ZipPostalCode"]')
        this.checkbox2 = page.locator('input[id="termsofservice"]')
        this.checkoutbtn = page.locator('button[id="checkout"]')

    }
}
export default apparel_loc