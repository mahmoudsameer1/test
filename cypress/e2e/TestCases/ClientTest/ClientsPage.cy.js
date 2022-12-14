import ClientsPage from "../../POM/Clients/ClientsPage"
import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"


describe('test',function(){

    const loginPage = new LoginPage
    const dashboardPage = new DashBoardPage
    const clientsPage = new ClientsPage
    
    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })

    it('test',function(){

        dashboardPage.clickOnclientPageBtn()
        clientsPage.clickOnCreateNewClientBtn().ValidateNewClientPageTitle()

    })
})