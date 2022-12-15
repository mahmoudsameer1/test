import cypress from "cypress"
import CreatePayload from "./CreatePayload"

class Payload{

    get CreatepayloadBtn(){
        return cypress.get('[href="https://center.sageruae.com/payloads/create"] > img')
    }

    clickOnCreateNewBtn(){
        this.CreatepayloadBtn.click({force : true})
        return new CreatePayload 
    }
}
export default Payload