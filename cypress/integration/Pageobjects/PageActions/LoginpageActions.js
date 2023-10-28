///<reference types="Cypress" />
import LoginpageElements from '../PageElements/LoginpageElements'

export default class LoginpagepageActions

{

constructor()
{

globalThis.element = new LoginpageElements()
}

flourishlogin()
{
    
    element.Navigateurl()
    element.EnterUserName().type('jgarcia_demo@flourishsoftware.com')
    element.EnterPassword().type('Flourish1!')
    element.ClickonLoginbutton().click()
    cy.wait(3000)
    element.selectpin().click({force: true})
    

}

Select_Retail_Facility()
{
    element.selectcultivation().should('be.visible')
    element.selectcultivation().click()
    element.selectRetail().click()
}

}




