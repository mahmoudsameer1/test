class AddnewClientPage{

    get CreateNewClientTitle(){
        return cy.get('.breadcrumb > :nth-child(3)')
    }
    get companyName(){
       return cy.get(':nth-child(1) > .form-floating > .form-control')
    }

    get industry(){
       return cy.get('.form-floating > .dropdown > .btn')
    }

    get chooseindustry(){
        return cy.xpath('//*[@id="bs-select-1"]/ul')
    }

    get AccounrManager(){
        return cy.get(':nth-child(3) > .form-floating > #industry-list')
    }

    get companyLogo(){
        return cy.get('#company-logo')
    }

    get Name(){
        return cy.get(':nth-child(6) > .form-floating > .form-control')
    }

    get userName(){
        return cy.get(':nth-child(7) > .form-floating > .form-control')
    }

    get getemail(){
        return cy.get(':nth-child(8) > .form-floating > .form-control')
    }

    get password(){
        return cy.get(':nth-child(9) > .form-floating > .form-control')
    }

    get Address(){
        return cy.get(':nth-child(10) > .form-floating > .form-control')
    }
    get Activation(){
        return cy.get('.col-12.mb-25 > :nth-child(2)')
    }
    get saveBtn(){
        return cy.get('.justify-content-md-end > .btn')
    }
    
    ValidateNewClientPageTitle(){
        this.CreateNewClientTitle.should('be.visible')
    }
    
    CreateNewClientForm(){
        const img = 'Logo.png'
        this.companyName.type("companyname",{force : true})
        this.industry.click({force : true})
        this.chooseindustry.contains('Insurance').click({force : true })
        this.companyLogo.selectFile(img, {force : true})
        
    }
}
export default AddnewClientPage