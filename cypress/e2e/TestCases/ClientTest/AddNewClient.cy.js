import AddnewClientPage from "../../POM/Clients/AddNewClientPage"
import ClientsPage from "../../POM/Clients/ClientsPage"
import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"


describe('test',function(){

    const dashboardPage = new DashBoardPage
    const loginPage = new LoginPage
    const clientsPage = new ClientsPage
    const addnewclientPage = new AddnewClientPage

    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })

       it('login using admin cridentials',function(){

       dashboardPage.clickOnclientPageBtn()
       clientsPage.clickOnCreateNewClientBtn()
       addnewclientPage.CreateNewClientForm()
       })
}) 