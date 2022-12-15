class PDashboardpage{

    get flightsPageBtn(){
        return cy.get('#menu > :nth-child(3) > .flex-row')
    }

    clickOnFlightsPageBtn(){
        this.flightsPageBtn.click({force : true})
    }
}
export default PDashboardpage