import CreateNewProject from "./CreateNewProject"

class PorjectPage {

    get createProjectTitle(){
        return cy.get('.breadcrumb > :nth-child(2)')
    }

    get CreateNewprojectbtn(){
        return cy.get('.gap-30 > [href="https://center.sagerspace.net/projects/create"]')
    }

    validateCreateProjectpageTitle(){
        this.createProjectTitle.should('be.visible')
    }
    
    clickonCreatenewprojectBtn(){
        this.CreateNewprojectbtn.click({force : true})
        return new CreateNewProject
    }
}
export default PorjectPage