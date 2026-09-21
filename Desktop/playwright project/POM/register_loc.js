class register_loc{
    constructor (page){
        this.radiobtn = page.locator('input[id="gender-male"]')
        this.firstnametf = page.locator('input[id="FirstName"]')
        this.lastnametf = page.locator('input[id="LastName"]')
        this.emailtf = page.locator('input[id="Email"]')
        this.passwordtf = page.locator('input[id="Password"]')
        this.confirmpwdtf = page.locator('input[id="ConfirmPassword"]')
        this.submitbtn = page.locator('input[id="register-button"]')
        this.contbtn = page.locator('input[class="button-1 register-continue-button"]')

    }
}
export default register_loc