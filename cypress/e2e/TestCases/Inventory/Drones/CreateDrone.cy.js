import DashBoardPage from "../../../POM/DashBoard/DashBoardPage"
import CreateDrone from "../../../POM/Inventory/Drones/CreateDrone"
import Drones from "../../../POM/Inventory/Drones/Drones"
import LoginPage from "../../../POM/LoginPage"

describe('CreateNewMission',function(){

    const dashboardPage = new DashBoardPage
    const loginPage = new LoginPage
    const dronesPage = new Drones
    const createDrone = new CreateDrone


    beforeEach('Login',function(){
        loginPage.load().doLogin("test@test.test","12345678")
    })

    it('CreateNewMissionTest',function(){
        dashboardPage.clickOnDronespageBtn()
        dronesPage.clickOnCreateDroneBtn()
        createDrone.CreateDroneFrom()
    })

})