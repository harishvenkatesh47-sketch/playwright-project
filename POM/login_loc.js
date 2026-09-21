class login_loc{
    constructor(page){
        this.emaillogin = page.locator('input[id="Email"]')
        this.passwordlogin = page.locator('input[id="Password"]')
        this.loginbtn1 = page.locator('input[class="button-1 login-button"]')
    }
}
export default login_loc