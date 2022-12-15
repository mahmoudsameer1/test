import CreateDrone from "./CreateDrone"

class Drones{

    get CreateDroneBtn(){
        return cy.get('[href="https://center.sageruae.com/drones/create"] > img')
    }

    clickOnCreateDroneBtn(){
        this.CreateDroneBtn.click({force : true })
        return new CreateDrone
    }

}
export default Drones