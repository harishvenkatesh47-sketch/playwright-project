class computer_loc{
    constructor(page){
        this.computertab = page.getByRole('link', { name: 'Computers' });
        this.seldesktop = page.locator('xpath=/html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[1]/div[1]/div/div/a/img');
        this.dd1 = page.locator('select[id="products-orderby"]')
        this.addtocartbtn = page.locator('input[class="button-2 product-box-add-to-cart-button"]')
        this.addtocartbtn1 = page.getByRole('button', { name: 'Add to cart' }).first()
        this.shoppingcartbtn = page.locator('//span[text()="Shopping cart"]')
        this.checkbox1 = page.locator('input[name="removefromcart"]')
        this.selectcountrydd = page.locator('select[id="CountryId"]')
        this.zipcodebox = page.locator('input[id="ZipPostalCode"]')
        this.checkbox2 = page.locator('input[id="termsofservice"]')
        this.checkoutbtn = page.locator('button[id="checkout"]')
    }
}
export default computer_loc