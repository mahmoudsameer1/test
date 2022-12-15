class LoginPage{

    get emailInput(){
        return cy.get('#login-email')
    }

    get passwordInput(){
        return cy.get('#login-password')
    }

    get loginBtn(){
        return cy.get('.btn')
    }

    load(){
        cy.visit('/')
        return this
    }

    doLogin(email,password){
        this.emailInput.type(email, {force : true})
        this.passwordInput.type(password,{force: true})
        this.loginBtn.click({force : true})
    }
}
export default LoginPage;