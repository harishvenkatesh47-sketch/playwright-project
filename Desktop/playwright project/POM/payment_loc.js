class payment_loc {
    constructor(page) {
        this.cod = page.locator('input[id="paymentmethod_0"]')
        this.continue3 = page.locator('//*[@id="payment-method-buttons-container"]/input')
        
    }
}

export default payment_loc