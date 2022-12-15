class PilotPage{

    get pilotPageTitle(){
        return cy.get('.breadcrumb > :nth-child(2)')
    }

    validatepilotPageTitle(){
        this.pilotPageTitle.should('be.visible')
    }

 }
 export default PilotPage