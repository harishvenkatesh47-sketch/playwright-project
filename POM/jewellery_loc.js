class jewellery_loc{
    constructor(page){
        this.jewellerytab = page.locator('a[href="/jewelry"]').first();
        this.firstorna = page.locator('input[class="button-2 product-box-add-to-cart-button"]').first()
        this.addtocart = page.locator('input[id="add-to-cart-button-71"]')


    }
}
export default jewellery_loc