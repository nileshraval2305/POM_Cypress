///<reference types="Cypress" />


import LoginpagepageActions from '../Pageobjects/PageActions/LoginpageActions'
import Retail_Manage_Tills_Actions from '../Pageobjects/PageActions/Retail_Manage_Tills_Actions'
import Retail_Till_Close_Store_Actions from '../Pageobjects/PageActions/Retail_Till_Close_Store_Actions'
import Retail_Manage_Tills_Elements from '../Pageobjects/PageElements/Retail_Manage_Tills_Elements'

describe("To verified Retail Close store end to end",function(){
   
     beforeEach(() => {
     // before each test, we can automatically preserve the
     // 'session_id' and 'remember_token' cookies. this means they
     // will not be cleared before the NEXT test starts.
     //
     // the name of your cookies will likely be different
     // this is an example
     //cy.viewport(900, 800)
     const loginpage = new LoginpagepageActions()

     loginpage.flourishlogin()
     cy.wait(1000);
     cy.log("Login successful")
    loginpage.Select_Retail_Facility()
   })




it("To verified Reconcile epayments using manual canpay in Retail",function()
{

const Tills = new Retail_Manage_Tills_Elements()
const customer = new Retail_Till_Close_Store_Actions()

Tills.Retail().click()
customer.Validate_Manual_Canpay()

})


})




