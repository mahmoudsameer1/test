import DashBoardPage from "../../POM/DashBoard/DashBoardPage"
import LoginPage from "../../POM/LoginPage"
import CreateNewProject from "../../POM/Project/CreateNewProject"
import PorjectPage from "../../POM/Project/ProjectPage"

describe('test',function(){

    const dashboardPage = new DashBoardPage
    const loginPage = new LoginPage
    const projectpage = new PorjectPage
    const createNewProject = new CreateNewProject

    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })

    it('Create New Project Test',function(){
        dashboardPage.clickOnprojectPageBtn()
        projectpage.clickonCreatenewprojectBtn()
        createNewProject.CreateProjectForm()
    })
})