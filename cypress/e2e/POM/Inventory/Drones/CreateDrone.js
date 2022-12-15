class CreateDrone{

    get brandList(){
        return cy.get('#brand-list')
    }

    get modelList(){
        return cy.get('#model-list')
    }

    get name(){
        return cy.get(':nth-child(3) > .form-floating > .form-control')
    }

    get DroneTagName(){
        return cy.get(':nth-child(4) > .form-floating > .form-control')
    }

    get DronePrefix(){
        return cy.get(':nth-child(5) > .form-floating > .form-control')
    }

    get DroneSerialNumber(){
        return cy.get(':nth-child(6) > .form-floating > .form-control')
    }

    get Location(){
        return cy.get('.form-floating > .dropdown > .btn')
    }

    get clickLocation(){
        return cy.xpath('//*[@id="bs-select-1"]/ul')
    }

    get registrationDate(){
        return cy.get('#registration-date')
    }

    get purchaseDate(){
        return cy.get('#purchase-date')
    }

    get radioBtn(){
        return cy.get("[type='radio']")
    }

    get saveBtn(){
        return cy.get('.justify-content-md-end > .btn')
    }

    CreateDroneFrom(){
        this.brandList.select(0,{force : true}) 
        this.modelList.wait(2000).select(1, {force : true})
        this.name.type('test', {force : true})
        this.DroneTagName.type('test', {force : true})
        this.DronePrefix.type('test',{force: true})
        this.DroneSerialNumber.type('1234567890', {force : true})
        this.Location.click({force: true})
        this.clickLocation.contains('Sager Office', {force : true}).click({force:true})
        this.registrationDate.type('2022-12-15',{force: true})
        this.purchaseDate.type('2022-12-15',{force: true})
        this.radioBtn.check('valid', {force : true})
        this.radioBtn.check('airworthy', {force : true})
        this.radioBtn.check('1', {force : true})
        this.saveBtn.click({force : true})
    }
}
export default CreateDrone