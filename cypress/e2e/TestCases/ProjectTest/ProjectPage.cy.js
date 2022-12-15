import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"
import PorjectPage from "../../POM/Project/ProjectPage"

describe('test',function(){

    const dashboardPage = new DashBoardPage
    const loginPage = new LoginPage
    const projectPage = new PorjectPage

    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })

    it('test',function(){
        dashboardPage.clickOnprojectPageBtn()
        projectPage.clickonCreatenewprojectBtn()
    })
})