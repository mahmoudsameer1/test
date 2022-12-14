import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"

describe('pagesTitleValidation',function(){
    
    const dashboardPage = new DashBoardPage
    const loginPage = new LoginPage

    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })
    
    it('ClientPageTitleValidation', function(){
        dashboardPage.clickOnclientPageBtn().ValidateClientsPageTitle()
    })

    it('ListMissionPageValidation', function(){
        dashboardPage.clickOnMissionListPageBtn().ValidateMissionListPageTitle()
    })

    it('Add new mission page validation', function(){
        dashboardPage.clickOnCreateNewMissionPageBtn().validateNewMissionpageTitle()
    })

    it('Projectpage Validation', function(){
        dashboardPage.clickOnprojectPageBtn().validateCreateProjectpageTitle()
    })

    it('Pilotpage Validation', function(){
        dashboardPage.clickOnpilotsPageBtn().validatepilotPageTitle()
    })

})