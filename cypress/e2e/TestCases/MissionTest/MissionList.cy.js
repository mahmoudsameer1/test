import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"

describe('MissionListpage',function(){

    const dashboardPage = new DashBoardPage
    const loginpage = new LoginPage

    beforeEach('Login',function(){
        loginpage.load().doLogin("test@test.test","12345678")
    })

    it('test',function(){
        dashboardPage.clickOnMissionListPageBtn()
    })
})