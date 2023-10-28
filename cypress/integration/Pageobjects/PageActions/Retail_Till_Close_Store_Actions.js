//<reference types="Cypress" />

import Retail_Closestore_Element from '../PageElements/Retail_Closestore_Element'
import Retail_Manage_Tills_Elements from '../PageElements/Retail_Manage_Tills_Elements'
import { v4 as uuidv4 } from 'uuid';

import LoginpageElements from '../PageElements/LoginpageElements'


export default class Retail_Till_Close_Store_Actions

{

 constructor()
{

globalThis.element = new Retail_Closestore_Element()
globalThis.element1 = new Retail_Manage_Tills_Elements()
globalThis.element2 = new LoginpageElements()

}

Validate_Manual_Canpay()

{
    var _firstname=null
    var _middlename=null
    var _lastname=null
    var _regid=null;
    var _getamount=null;
    var Before_webmanualcanpay=null;
    var After_webmanualcanpay=null;
    var Totalamount=0;
   
    element1.Tillmodule().should('be.visible').then(($e1)=>
    {

        element1.Tillmodule().should('be.visible').click()
        cy.log('Click on till module')
       


    })
   
    element1.Page_Loader().should('be.have.length', 0).then(($e1)=>
    {
        element.Retail_Reconcile_Epayment().should('be.visible').click()
        cy.log('Click on Reconcile e-payment option')
        
    
    })
    
    
    cy.checkIfEleExists('select[aria-label="rows per page"]')
    .then(e=>{
            //// now do what if that element is in ,,..
            })
    .catch(e=>{
        ////// if not exists...
        })
   
   
    element.Reconcile_Epayment_Manual_Can_Pay_Amount_web().should('be.visible').then(function(amount)
    {
       
        Before_webmanualcanpay = amount.text().replace('$','')
        cy.log('Manual Payment is',Before_webmanualcanpay)
       
        element.Reconcile_Epayment_Manual_Can_Pay_web().should('be.visible')
        element.Reconcile_Epayment_Cancel_Button_Web().should('be.visible').click()
        cy.log('Click on Cancel button')
     
    })


    element.Retail_Customers().should('be.visible').then(($e1)=>
    {
        element.Retail_Customers().click()
        cy.log('Click on Retail customer option')
    })
        
   
   
   
    element1.Page_Loader().should('be.have.length', 0).then(($e1)=>
    {

        element.Retail_Add_New_Customers().should('be.visible').click()
        cy.log('Click on Add new  customer option')

    })
    



    element.Retail_Add_New_Customers_First_Name().should('be.visible').then((firstname)=>
    {
        _firstname =element.Retail_Generate_Customer_Firstname()
        element.Retail_Add_New_Customers_First_Name().type(_firstname)
        cy.log('Enter first name',_firstname)

    })

    element.Retail_Add_New_Customers_Preferredname().should('be.visible').then((middlename)=>
    {
        _middlename =element.Retail_Generate_Customer_Firstname()
        element.Retail_Add_New_Customers_Preferredname().type(_middlename)
        cy.log('Enter middle name',_middlename)

    })
    element.Retail_Add_New_Customers_Lastname().should('be.visible').then((Lastname)=>
    {
        _lastname =element.Retail_Generate_Customer_Lastname()
        element.Retail_Add_New_Customers_Lastname().type(_lastname)
        cy.log('Enter last name',_lastname)

    })


    element.Retail_Add_New_Customers_DOB().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_New_Customers_DOB().type('02-02-1989')
        cy.log('Enter Date of birth',Lastname)
    })


   


    element.Retail_Add_Addrdess_link().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Addrdess_link().click()
        cy.log('Click on Add address link')
    })

    element.Retail_Add_Address_line1().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Address_line1().type('Address line 1')
        cy.log(' Enter Add address line 1')
    })

    element.Retail_Add_Address_line2().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Address_line2().type('Address line 2')
        cy.log(' Enter Add address line 2')
    })

    element.Retail_Add_Address_city().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Address_city().type('Ahmedabad')
        cy.log('Enter city')
    })

    element.Retail_Add_Address_State_dropdown().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Address_State_dropdown().click()
        cy.log('Click on state dropdown')
        element.Retail_Add_Address_State_dropdown_Value().click()
    })
  
    element.Retail_Add_Address_Zipcode().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Address_Zipcode().type('38007')
        cy.log('Enter zipcode')
    })
    element.Retail_Add_Address_Save_Button().should('be.visible').then((Lastname)=>
    {
        element.Retail_Add_Address_Save_Button().click()
        cy.log('Click on Save button for Address popup')
    })

    element.Retail_Save_Customer_Button().scrollIntoView().should('be.visible').then(($Element)=>
    {

        element.Retail_Save_Customer_Button().scrollIntoView().click()
        cy.log('Click on Save button in customer page')

    })

    element.Retail_Edit_Register_Info().should('be.visible').then((Lastname)=>
    {
        
        element.Retail_Edit_Register_Info().click()
        cy.log('Click on edit register link')
       
        _regid=uuidv4()
        
        element.Retail_State_Registry_ID().should('be.visible').type(_regid)

    })

    element.Retail_Select_StateDropdown().should('be.visible').then((Lastname)=>
    {
        element.Retail_Select_StateDropdown().click()
        cy.log('Click on state dropdown and select AR state')
        element.Retail_Select_StateDropdown_Value_AR().click({force: true})
    })



    element.Retail_Save_Register_Info().scrollIntoView().should('be.visible').then((Lastname)=>
    {
        
        element.Retail_Save_Register_Info().click()
        cy.log('Click on Save register info link')
            
        

    })

   
    element.Retail_Edit_Pencil_Verified_Checkbox().should('be.visible').then((Lastname)=>
    {
        
        element.Retail_Edit_Pencil_Verified_Checkbox().should('be.visible').click()
        cy.log('Click on Edit pencil for verified checkbox')
            
        

    })

    element.Retail_Click_Verified_Checkbox().should('be.visible').then((Lastname)=>
    {
        
        element.Retail_Click_Verified_Checkbox().click()
        cy.log('Click on verified checkbox medical')
            
        

    })

    element.Retail_Save_Pencil_Verified_Checkbox().should('be.visible').then((Lastname)=>
    {
        
        element.Retail_Save_Pencil_Verified_Checkbox().click()
        cy.log('Save verified checkbox')
            
        

    })

    element.Retail_Purchase_Button().scrollIntoView().should('be.visible').then((purchase)=>
    {
        
        purchase.click()
        cy.log('Click on Purchase')
            
        

    })

    cy.waitUntil(() =>element1.Module_Loader_Large().should('not.be.visible').then(($e1)=>
    {

        element.Retail_Start_New_Purchase_Button().click()
        cy.log('Click on Start new Purchase')

    }))



    element.Retail_Select_Store().should('be.visible').then((selectstore)=>
    {
        
        selectstore.click()
        element.Retail_Select_Store_Value().should('be.visible').click()
        cy.log('Select Retail from Store')
            
        

    })
 
    cy.waitUntil(() =>element1.Module_Loader_Large().should('not.be.visible').then(($e1)=>
    {

        element.Retail_Add_New_Item_Button().scrollIntoView().should('be.visible').click()
        cy.log('Click on add new item button')
        element.Retail_Select_An_Item_Dropdown().scrollIntoView().click({force:true})
        cy.log('Click on select an item')
        element.Retail_Search_Item().type('blended')
        cy.log('search an item')
        element.Retail_Select_An_Item_Dropdown_Value().should('be.visible').click({force:true})
        cy.log('Select dropdown value as Blended oil')
    }))

    
    
    
    
    element.Retail_Submit_Button().should('be.visible').then((submit)=>
    {
        
        submit.click()
        cy.log('Click on Submit button')
        element.Retail_Assingn_Inventory_Manually().scrollIntoView().should('be.visible').click()  
        cy.log('Click on Assign inventory click')
    })
    
    element.Retail_Add_Package().scrollIntoView().should('be.visible').then((addpkg)=>
    {
        
        element.Retail_Add_Package().scrollIntoView().should('be.visible').click()
        cy.log('Click on Add package button')
        element.Retail_Select_Package().should('be.visible').click()  
       
        element.Retail_Select_Package_Value().should('be.visible').click()  
        cy.log('Click on Select Package dropdown value')

    })


   

    element.Retail_Enter_Package_Qty().should('be.visible').then((Enterpkg)=>
    {
        
       
        element.Retail_Enter_Package_Qty().click({force:true})
        element.Retail_Enter_Package_Qty_value().type('1',{force:true}).type('{enter}')
        cy.log('enter pkg qty')
       

    })

    element.Retail_Complete_Package_Button().should('be.visible').then((completepkgbutton)=>
    {
        
        completepkgbutton.click()
        
        cy.log('Click on Complete pkg button')
       

    })
   
   element.POS_URL()
   cy.log('Launch of Flourish POS url')
       
  
   element.POS_Login_Username().should('be.visible').then((login)=>
   {
       
    element.POS_Login_Username().type('jgarcia_demo@flourishsoftware.com')
       
       cy.log('enter username from POS')
       element.POS_Login_Password().should('be.visible').type('Flourish1!')
       cy.log('enter Password from POS')
    })

    element.POS_Login_Submit_Button().should('be.visible').then((submit)=>
    {
        
        submit.click()
        cy.log('Click on submit button')
     })


     element.POS_Select_Cultivation_Facility().should('be.visible').then((CULTIVATION)=>
     {
         
         CULTIVATION.click()
         cy.log('Click on Cultivation facility')

         element.POS_Select_Retail_Facility().scrollIntoView().should('be.visible').click()
         cy.log('Click on Retail facility')
      })

      element.POS_Enter_Pin_1(3).should('be.visible').then((pin)=>
     {
         
        element.POS_Enter_Pin_1(3).click({multiple: true})
         cy.log('Click on 3')
         element.POS_Enter_Pin_1(6).click({multiple: true})
         cy.log('Click on 6')
         element.POS_Enter_Pin_1(4).click({multiple: true})
         element.POS_Enter_Pin_1(1).click({multiple: true})
         cy.log('Click on 1')
         element.POS_Enter_Pin_1(6).click({multiple: true})
         cy.log('Click on 6')
         element.POS_Enter_Pin_1(9).click({multiple: true})
         cy.log('Click on 9')

      })

     
     
      
     
      element.POS_Shop_Option().scrollIntoView().should('be.visible').then((Delivery)=>
      {
          
        element.POS_Shop_Option().click()
          cy.log('Click on shop option')
 
         
       })

       element.POS_Sales_histories().should('be.visible').then((Delivery)=>
      {
          
        element.POS_Sales_histories().click()
          cy.log('Click on Sales histories')
 
         
       })

       element.POS_Sales_Histories_Type_Name().should('be.visible').then((Delivery)=>
       {
           
         element.POS_Sales_Histories_Type_Name().type(_regid)
           cy.log('enter state reg id')
           element.POS_Select_orderid().click()
           cy.log('Select store id')
          
        })
     
        // click on Validate Button


        element.POS_Validate_Button().should('be.visible').then((Delivery)=>
        {
            
          element.POS_Validate_Button().click()
          cy.log('click on POS Validate button')
          element.POS_Closestore().click()
          cy.log('click on Close store button')
         })
   
        
         element.POS_payment().should('be.visible').then((Delivery)=>
         {
             
           element.POS_payment().click()
           cy.log('click on POS payment button')
           element.POS_Select_Till().click()
           cy.log('click on Till button')
           element.POS_Select_Till_value().click()
           cy.log('Select Till value')
           element.POS_Select_Till_Yes_Button().click()
           cy.log('Select yes button')
        
        })
    
        element.POS_Canpay_Manual_payment().should('be.visible').then((Delivery)=>
        {
            
          element.POS_Canpay_Manual_payment().click()
          cy.log('click on POS manual payment button')
         
       
       
       })

       element.POS_Get_Value().should('be.visible').then(function(amount)
       {
          
        _getamount = amount.text().replace('$','')
          
        element.POS_Enter_Canpay_Amount().type(_getamount)
        element.POS_Enter_Canpay_TranscationID().type('12345')
        element.POS_SelectPayment_Method().type('canpay').type('{enter}')
        
        element.POS_Record_Epayment().click()
       })
   
      
       element2.Navigateurl()
       element2.selectcultivation().click()
       element2.selectRetail().click()
       element1.Retail().click()
       element1.Tillmodule().should('be.visible').click()
       cy.log('Click on till module')

        
   
         element1.Page_Loader().should('be.have.length', 0).then(($e1)=>
         {
             element.Retail_Reconcile_Epayment().should('be.visible').click()
             cy.log('Click on Reconcile e-payment option')
             Totalamount= Number(_getamount) +Number(Before_webmanualcanpay)
             cy.log('Total amount is ',Totalamount)
         
         })
    
         element.Reconcile_Epayment_Manual_Can_Pay_Amount_web().should('be.visible').then(function(amount)
         {
            
            
            
            
            
            After_webmanualcanpay = amount.text().replace('$','')
             cy.log('Manual Payment is',After_webmanualcanpay)
            
             element.Reconcile_Epayment_Manual_Can_Pay_web().should('be.visible')
             element.Reconcile_Epayment_Cancel_Button_Web().should('be.visible').click()
             cy.log('Click on Cancel button')
          
         })
    
    
        }





}