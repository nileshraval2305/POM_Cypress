///<reference types="Cypress" />


export default class LoginpageElements
{

   Navigateurl()
   {

    return cy.visit('https://uat.flourishsoftware.com')
    
   }

    EnterUserName() {
        return cy.get('#username')
    }
    EnterPassword(){
        return cy.get('#password')
    }
    ClickonLoginbutton(){
        return cy.get('.flourish-submit-button')
    }
    selectpin(){
        return cy.get('.push-pin-checkbox > .icon-container > inline-svg > .inline-svg-container > svg')
    }

    selectcultivation(){
        return cy.get('.top-nav-select-facility-anchor-text')
    }
     
    selectRetail(){
        return cy.get('div[class="header-container"] li:nth-child(4) a:nth-child(1)')
        
    }
   
}