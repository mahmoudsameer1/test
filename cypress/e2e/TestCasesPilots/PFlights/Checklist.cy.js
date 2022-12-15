import PDashboardpage from "../../POMPilots/dashboard/PDashboardPage"
import FlightsPage from "../../POMPilots/Flights/FlightsPage"
import PLoginPage from "../../POMPilots/PLoginPage"



describe('test',function(){

    const login = new PLoginPage
    const dashoard = new PDashboardpage
    const flight = new FlightsPage

    beforeEach('login',function(){
        login.
        load().
        doLogin("m.sameer@sagerdrone.com", "123456789")
    })

    it('test', function(){
        dashoard.clickOnFlightsPageBtn()
        flight.clickOnViewBtn()
    })
})