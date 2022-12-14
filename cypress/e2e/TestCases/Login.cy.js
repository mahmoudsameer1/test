import LoginPage from "../POM/LoginPage"

    describe('login',function(){

        const loginPage = new LoginPage
        it('login using admin cridentials',function(){
            loginPage.
            load().
            doLogin("test@test.test", "12345678")
        })
 })