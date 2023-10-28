///<reference types="Cypress" />
import LoginpagepageActions from '../Pageobjects/PageActions/LoginpageActions'


describe("Login testsuite",function(){

it("Enter correct username and password",function()
{

  const loginpage = new LoginpagepageActions()

  loginpage.flourishlogin()
   
})


})
