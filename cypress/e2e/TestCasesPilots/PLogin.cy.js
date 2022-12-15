import LoginPage from "../POMPilots/PLoginPage"

describe('login',function(){

    const loginPage = new LoginPage
    it('login using admin cridentials',function(){
        loginPage.
        load().
        doLogin("m.sameer@sagerdrone.com", "123456789")
    })
})