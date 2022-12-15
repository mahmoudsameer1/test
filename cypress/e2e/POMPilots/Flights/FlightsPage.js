class FlightsPage {

    get ViewBtn(){
        return cy.get('tbody > :nth-child(1) > :nth-child(5) > a')
    }

    clickOnViewBtn(){
        this.ViewBtn.click( { force : true } )
    }
}
export default FlightsPage