///<reference types="Cypress" />


import LoginpagepageActions from '../Pageobjects/PageActions/LoginpageActions'
import Retail_Manage_Tills_Actions from '../Pageobjects/PageActions/Retail_Manage_Tills_Actions'

describe("To verified Retail Manage till end to end",function(){
   
    
    
     
           beforeEach(() => {
            // before each test, we can automatically preserve the
            // 'session_id' and 'remember_token' cookies. this means they
            // will not be cleared before the NEXT test starts.
            //
            // the name of your cookies will likely be different
            // this is an example
            const loginpage = new LoginpagepageActions()
 
            loginpage.flourishlogin()
            cy.wait(1000);
            cy.log("Login successful")
           loginpage.Select_Retail_Facility()
})          
 
 
 
 
   it.skip("To verified Till Vault count in Retail",function()
 {
 
   const Tills = new Retail_Manage_Tills_Actions()
   
   Tills.Retail_manage_tills_event()
   Tills.Validatecashvault_functionality()
 
 })
 

 it.skip("To verified Amount when Transfer One Subvault to other Subvault in Retail",function()
 {
 
   const Tills = new Retail_Manage_Tills_Actions()
   
   Tills.Retail_manage_tills_event()
   cy.wait(2000)
   Tills.Validate_Manage_SubVault()
 
 })
 
 it.skip("To Verified message when Amount is greater than from subvault to Transfer Subvault in Retail",function()
 {
 
   const Tills = new Retail_Manage_Tills_Actions()
   
   Tills.Retail_manage_tills_event()
   cy.wait(2000)
   Tills.validate_Manage_SubVault_Amount_Greaterthan_Current_Subvault()
 
 })
 it.skip("To Verified till report amount when update subvault value in Retail",function()
 {
 
   const Tills = new Retail_Manage_Tills_Actions()
   
   Tills.Retail_manage_tills_event()
   cy.wait(2000)
   Tills.ValidateTill_Report_Functionality()
 
 })

 it("To Verified till report amount from one subvault to another Subvault in Retail",function()
 {
 
   const Tills = new Retail_Manage_Tills_Actions()
   
   Tills.Retail_manage_tills_event()
   cy.wait(2000)
   Tills.Validate_Manage_SubVault_Till_Report()
 
 })


 })