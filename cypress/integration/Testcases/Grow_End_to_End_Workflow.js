///<reference types="Cypress" />


import GrowCreateplantActions from '../Pageobjects/PageActions/GrowCreateplantActions'
import Moveclonegrouptovegitation_Action from '../Pageobjects/PageActions/Moveclonegrouptovegitation_Action'
import MoveVegitationtoFloweringAction from '../Pageobjects/PageActions/MoveVegitationtoFloweringAction'
describe("To verified grow workflow End to End",function(){
   
   import LoginpagepageActions from '../Pageobjects/PageActions/LoginpageActions'
    before(function() {
        const loginpage = new LoginpagepageActions()

            loginpage.flourishlogin()
            cy.wait(1000);
            cy.log("Login successful")
            cy.get('#nav-grow > div > p').dblclick()
            cy.wait(3000);
            cy.reload()
          })
    
it("To verified grow workflow End to End",function()
{

  const Createplant = new GrowCreateplantActions()
  const movetoveg = new Moveclonegrouptovegitation_Action()
  const movevegtoflowering = new MoveVegitationtoFloweringAction()
  Createplant.CreatePlant_FromClone()
  movetoveg.Clonetovegmove()
  movevegtoflowering.MoveveggrouptoFlowering()


})


})
