import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"
import AddNewMissionpage from "../../POM/Missions/AddNewMissionPage"

describe('CreateNewMission',function(){

    const dashboardPage = new DashBoardPage
    const loginPage = new LoginPage
    const addnewmissionpage = new AddNewMissionpage

    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })

    it('CreateNewMissionTest',function(){
        dashboardPage.clickOnCreateNewMissionPageBtn()
        addnewmissionpage.CreateNewMission()
        addnewmissionpage.ApproveTheMission()
        addnewmissionpage.StartThePlaning()
        addnewmissionpage.flightInfo()
    })

})