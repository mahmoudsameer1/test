import AddnewClientPage from "./AddNewClientPage"

class ClientsPage {

    get clientspageTitle(){
        return cy.get('.breadcrumb > :nth-child(2)')
    }
    
    get CreatenewClientBtn(){
       return cy.get('[href="https://center.sagerspace.net/clients/create"] > img') 
    }

    ValidateClientsPageTitle(){
        this.clientspageTitle.should('be.visible')
    }

    clickOnCreateNewClientBtn(){
        this.CreatenewClientBtn.click({force : true})
        return new AddnewClientPage
    }
}
export default ClientsPage