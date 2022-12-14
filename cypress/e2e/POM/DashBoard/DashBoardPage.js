import AddNewMissionpage from "../Missions/AddNewMissionPage"
import MissionListpage from "../Missions/MissionListPage"
import ClientsPage from "../Clients/ClientsPage"
import PilotPage from "../Pilot/PilotPage"
import PorjectPage from "../Project/ProjectPage"

class DashBoardPage{

    get DashBoardTitle(){
       return cy.get('.active > .flex-row')
    }
    
    get clientsPageBtn(){
        return cy.get('#menu > :nth-child(3) > .flex-row')
    }

    get pilotsPageBtn(){
        return cy.get(':nth-child(4) > .flex-row')
    }
    
    get projectpageBtn(){
        return cy.get('#menu > :nth-child(5) > .flex-row')
    }

    get missionsListBtn(){
        return cy.get('#missions-collapse > .inner-list > :nth-child(1) > .fn-18-dynamic')
    }

    get addNewMissionBtn(){
        return cy.get('#missions-collapse > .inner-list > :nth-child(2) > .fn-18-dynamic')
    }

    get createNewProjectBtn(){
       return cy.get('.menu-create-project')
    }
    
    DashboardTitleShouldBeVisible(){
        this.DashBoardTitle.should('be.visible')
    }

    clickOnclientPageBtn(){
        this.clientsPageBtn.click({force : true})
        return new ClientsPage
    }

    clickOnpilotsPageBtn(){
        this.pilotsPageBtn.click({force : true})
        return new PilotPage
    }

    clickOnprojectPageBtn(){
        this.projectpageBtn.click({force : true})
        return new PorjectPage
    }

    clickOnMissionListPageBtn(){
        this.missionsListBtn.click({force : true})
        return new MissionListpage
    }

    clickOnCreateNewMissionPageBtn(){
        this.addNewMissionBtn.click({force: true})
        return new AddNewMissionpage
    }
}

export default DashBoardPage