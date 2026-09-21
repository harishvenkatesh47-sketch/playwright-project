import {test} from "@playwright/test"
import { login } from "../Utilities/business_login"
import jewellery_loc from "../POM/jewellery_loc"
test("jewellery",async ({page}) => {
    await login(page)
    let jew = new jewellery_loc(page)
    await jew.jewellerytab.click()
    await jew.firstorna.click()
    await jew.addtocart.click()
    

    
})
