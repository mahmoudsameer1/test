class AddNewMissionpage{

    get NewMissionTitle(){
        return cy.get('.breadcrumb > :nth-child(3)')
    }

    get missionName(){
        return cy.get('#name')
    }

    get StartDate(){
        return cy.get('#start-date')
    }

    get ClientAssignd(){
        return cy.get(':nth-child(4) > .form-floating > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
    }

    get clickCliendAssignd(){
        return cy.get('#bs-select-1-0')
    }
    get site(){
        return cy.get('.site-id-field > .form-floating > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
    }

    get clickSite(){
        return cy.get('#bs-select-2-0')
    }

    get Type(){
        return cy.get(':nth-child(6) > .form-floating > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
    }

    get clickType(){
        return cy.get('#bs-select-3-0')
    }

    get subType(){
        return cy.get(':nth-child(7) > .form-floating > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
    }

    get clickSubType(){
        return cy.get('#bs-select-4-0')
    }

    get ContinueBtn(){
        return cy.get('.js-next-page')
    }

    get uploadFile(){
        return cy.get('#uploadFile-1')
    }

    get note(){
        return cy.get('#note')
    }

    validateNewMissionpageTitle(){
        this.NewMissionTitle.should('be.visible')
    }
    
    CreateNewMission(){
        this.missionName.type("MissionName", {force : true})
        this.StartDate.type('2022-12-15T08:30',{force: true})
        this.ClientAssignd.click({force: true})
        this.clickCliendAssignd.click({force : true})
        this.site.click({force : true})
        this.clickSite.click({force : true})
        this.Type.click({force: true})
        this.clickType.click({force : true})
        this.subType.click({force : true})
        this.clickSubType.click({force : true})
        this.ContinueBtn.click({force : true})
        this.uploadFile.selectFile('testFile.pdf')
        this.ContinueBtn.click({force : true})
        this.note.type('note',{force : true})
        this.ContinueBtn.click({force : true})
    }

}
export default AddNewMissionpage