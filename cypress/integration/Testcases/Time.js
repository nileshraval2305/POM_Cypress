///<reference types="Cypress" />

import PSTTime from "../Pageobjects/PageActions/PSTTime"



describe("Time",function(){

it("Get current Time",function()
{

 // const time = Cypress.moment().format('M/D/YYYY h:mm A')
  //cy.log(time) 
  
 const Time = new PSTTime()
 



 const PSTDateandtime =  Time.PSTTime(null,'MM/DD/YYYY  h:mm A','America/Los_Angeles')
  cy.log(PSTDateandtime)
}) 


})
