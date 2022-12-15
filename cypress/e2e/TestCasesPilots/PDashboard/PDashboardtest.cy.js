import PDashboardpage from "../../POMPilots/dashboard/PDashboardPage"
import PLoginPage from "../../POMPilots/PLoginPage"



describe('test',function(){

    const login = new PLoginPage
    const dashoard = new PDashboardpage

    beforeEach('login',function(){
        login.
        load().
        doLogin("m.sameer@sagerdrone.com", "123456789")
    })

    it('test', function(){
        dashoard.clickOnFlightsPageBtn()
    })
})