class electronics_loc{
    constructor(page){
        this.electronicstab = page.getByRole('link', { name: 'Electronics' }).first()
        this.cellphonestab = page.getByAltText('Cell phones')
        this.addtocart1  = page.locator('input[class="button-2 product-box-add-to-cart-button"]').first()
        this.shoppingcartbtn = page.locator('//span[text()="Shopping cart"]')
        this.checkbox1 = page.locator('input[name="removefromcart"]')
        this.selectcountrydd = page.locator('select[id="CountryId"]')
        this.zipcodebox = page.locator('input[id="ZipPostalCode"]')
        this.checkbox2 = page.locator('input[id="termsofservice"]')
        this.checkoutbtn = page.locator('button[id="checkout"]')
        
        

    }
}
export default electronics_loc