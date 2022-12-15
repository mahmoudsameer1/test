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

    get ApproveMission(){
        return cy.get('.status > .btn')
    }

    get StartPlaning(){
        return cy.get('.height-fit')
    }

    get Flight(){
        return cy.get('.form-select')
    }

    get flightName(){
        return cy.get('#name')
    }
    
    get missioName(){
        return cy.get('.fields > :nth-child(6)')
    }

    get FlightDate(){
        return cy.get('#date')
    }

    get flightTime(){
        return cy.get('#time')
    }

    get choosedirection(){
        return cy.get('.filter-option-inner-inner')
    }

    get clickOnDirection(){
        return cy.xpath('//*[@id="bs-select-1"]')
    }

    get sideLap(){
        return cy.get(':nth-child(2) > .pr-2 > .form-control')
    }

    get frontLab(){
        return cy.get(':nth-child(2) > .pl-2 > .form-control')
    }

    get altitude(){
        return cy.get(':nth-child(3) > .pr-2 > .form-control')
    }

    get resolution(){
        return cy.get(':nth-child(3) > .pl-2 > .form-control')
    }

    get distance(){
        return cy.get(':nth-child(4) > :nth-child(1) > .form-control')
    }
    get speed(){
        return cy.get(':nth-child(4) > :nth-child(2) > .form-control')
    }

    get KMLFile(){
        return cy.xpath('//*[@id="kml-upload"]/label')
    }

    get saveandCon(){
        return cy.get('.mb-0 > .btn')
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

    ApproveTheMission(){
        this.ApproveMission.click({force : true })
        cy.on("window:confirm", (t) => {
            expect(t).to.equal("Approve this mission?");
         });
    }

    StartThePlaning(){
        this.StartPlaning.click({force : true})
    }

    flightInfo(){
        const kmlimg = 'Flight.kml'
        this.Flight.select(0)
        this.flightName.type('test1',{force : true})
        //this.missioName.select(0)
        this.FlightDate.type('2022-12-18',{force: true})
        this.flightTime.type('10:10', {force : true})
        this.choosedirection.click({force : true})
        this.clickOnDirection.contains('Parallel').click({force : true})
        this.sideLap.type('10',{force : true})
        this.frontLab.type('10', {force : true})
        this.altitude.type('10', {force : true})
        this.resolution.type('10',{force : true})
        this.distance.type('10', {force : true})
        this.speed.type('10', {force : true})
        this.KMLFile.selectFile(kmlimg, {force : true})
        this.saveandCon.click({force : true })

    }
}
export default AddNewMissionpage