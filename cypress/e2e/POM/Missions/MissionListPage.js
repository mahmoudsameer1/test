class MissionListpage{

    get MissionListPageTitle(){
       return cy.get('.breadcrumb > :nth-child(2)')
    }
    
    ValidateMissionListPageTitle(){
        this.MissionListPageTitle.should('be.visible')
    }
        
}

export default MissionListpage