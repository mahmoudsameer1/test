class CreateNewProject{

    get name(){
        return cy.get(':nth-child(1) > .form-floating > .form-control')
    }

    get startDate(){
       return cy.get('#start-date')
    }

    get endDate(){
       return cy.get('#end-date')
    }

    get Client(){
        return cy.get('.filter-option-inner-inner')
    }
    
    get ChooseClient(){
        return cy.get('#bs-select-1-0')
    }

    get Note(){
        return cy.get(':nth-child(5) > .form-floating > .form-control')
    }

    get save(){
        return cy.get('.justify-content-md-end > .btn')
    }

    CreateProjectForm(){
        this.name.type('test',{force : true})
        this.startDate.type('2022-12-18',{force: true})
        this.endDate.type('2022-12-20',{force: true})
        this.Client.click({force : true})
        this.ChooseClient.click({force : true})
        this.Note.type('note', {force : true})
        this.save.click({force : true})
    }
        
}
export default CreateNewProject