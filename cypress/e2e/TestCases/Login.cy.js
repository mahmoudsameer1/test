import LoginPage from "../POM/LoginPage"

describe('login',function(){
        
        it('login using admin cridentials',function(){
            const loginPage = new LoginPage
            loginPage.
            load().
            doLogin("test@test.test", "12345678")
        })
 })