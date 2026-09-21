class digital_loc{
    constructor (page){
        this.digitaltab = page.locator('//a[@href="/digital-downloads"]').first();
        this.addtocart = page.locator('input[class="button-2 product-box-add-to-cart-button"]').first();
        this.shoppingcartbtn = page.locator('//span[text()="Shopping cart"]')
        this.checkbox1 = page.locator('input[name="removefromcart"]')
        this.checkbox2 = page.locator('input[id="termsofservice"]')
        this.checkout =page.locator('button[id="checkout"]')

    }
}
export default digital_loc