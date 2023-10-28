///<reference types="Cypress" />
/// <reference types="cypress-xpath" />



export default class Retail_Closestore_Element
{

   
       firstname = null;
       middleName=null;
       lastName=null;
   
   
      Retail_Reconcile_Epayment()
       {
    
        return cy.xpath("//span[contains(text(),'Reconcile e-payments')]")
        
       }
    
     Retail_Customers()
    {
 
     return cy.xpath("//span[normalize-space(text())='Customers']")
     
    }

    Retail_Add_New_Customers()
    {
 
     return cy.xpath("//span[contains(text(),'Add a new customer')]")
     
    }


    Retail_Add_New_Customers_First_Name()
    {
 
     return cy.xpath("//input[@id='firstName']")
     
    }


    Retail_Add_New_Customers_Lastname()
    {
 
     return cy.xpath("//input[@id='lastName']")
     
    }


    Retail_Add_New_Customers_Preferredname()
    {
 
     return cy.xpath("//input[@id='preferredName']")
     
    }


    Retail_Add_New_Customers_DOB()
    {
 
     return cy.xpath("//input[@id='dateOfBirthDirective']")
     
    }

    Retail_Select_StateDropdown()
    {
 
     return cy.xpath("//state-selector//kendo-dropdownlist[1]/span[1]/span[2]")
     
    }
    Retail_Select_StateDropdown_Value_AR()
    {
 
     return cy.xpath("//li[text()='AR']")
     
    }

    Retail_State_Registry_ID()
    {
 
     return cy.xpath("//input[@id='medCardNo']")
     
    }

    Retail_Generate_Customer_Firstname()
    {

        const faker = require('faker');
        this.firstname = faker.name.firstName()
        
        cy.log('name is',this.firstname)
        return this.firstname

      

    }
    

      Retail_Generate_Customer_Preferredname()
    {

        const faker = require('faker');
        this.middleName = faker.name.middleName()
        
        cy.log('middle name is',this.middleName)
        return this.middleName

      }

      Retail_Generate_Customer_Lastname()
      {
  
          const faker = require('faker');
          this.lastName = faker.name.lastName()
          
          cy.log('Last name is',this.lastName)
          return this.lastName
  
        }

        Retail_Add_Addrdess_link()
        {
     
         return cy.xpath("//span[contains(text(),'Add an address')]")
         
        }

        Retail_Add_Address_line1()
        {
     
         return cy.xpath("//input[@id='addressLine1']")
         
        }


        Retail_Add_Address_line2()
        {
     
         return cy.xpath("//input[@id='addressLine2']")
         
        }

        Retail_Add_Address_city()
        {
     
         return cy.xpath("//input[@id='city']")
         
        }

        Retail_Add_Address_State_dropdown()
        {
     
         return cy.xpath("//body/div[1]/div[1]/div[1]/delivery-address-detail-modal[1]/form[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/state-selector[1]/kendo-dropdownlist[1]/span[1]/span[2]")
         
        }
     
        Retail_Add_Address_State_dropdown_Value()
        {
     
         return cy.xpath("//li[text()='AR']")
         
        }

        Retail_Add_Address_Zipcode()
        {
     
         return cy.xpath("//input[@id='zip']")
         
        }
        Retail_Add_Address_Save_Button()
        {
     
         return cy.xpath("//button[contains(text(),'Save')]")
         
        }

        Retail_Save_Customer_Button()
        {
     
         return cy.xpath("//span[contains(text(),'Save')]")
         
        }

        Scrollup()
        {
         return cy.scrollTo('top')
     
        }
      
        Retail_Edit_Register_Info()
        {
     
         return cy.xpath("//span[contains(text(),'Registry Info')]//following::a[1]")
         
        }
      
        Retail_Edit_Register_Info()
        {
     
         return cy.xpath("//body/app-root[1]/div[1]/div[2]/div[2]/main[1]/div[2]/ui-view[1]/app[1]/div[1]/ui-view[1]/retail[1]/div[2]/div[1]/div[2]/ui-view[1]/create-customer[1]/div[1]/div[5]/div[2]/customer-medical-info[1]/div[1]/form[1]/div[1]/span[2]/a[1]/i[1]")
         
        }
      
        Retail_Save_Register_Info()
        {
     
         return cy.xpath("//form[1]/div[1]/span[3]/a[2]/i[1]")
         
        }

        Retail_Edit_Pencil_Verified_Checkbox()
        {
          cy.reload()
         return cy.xpath("//customer-header/div[1]/div[2]/div[3]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/span[3]/a[1]")
         
        }

        Retail_Click_Verified_Checkbox()
        {
     
         return cy.xpath("//span[contains(text(),'Medical')]")
         
        }
        Retail_Save_Pencil_Verified_Checkbox()
        {
     
         return cy.xpath("//customer-header/div[1]/div[2]/div[3]/div[1]/form[1]/div[1]/div[1]/div[1]/label[2]/span[1]/a[2]/i[1]")
         
        }


        Retail_Purchase_Button()
        {
     
         return cy.xpath("//span[text()='Purchases']")
         
        }

        Retail_Purchase_Button()
        {
     
         return cy.xpath("//span[text()='Purchases']")
         
        }

        Retail_Start_New_Purchase_Button()
        {
     
         return cy.xpath("//span[contains(text(),'Start New Purchase')]")
         
        }
       
        Retail_Select_Store()
        {
     
         return cy.xpath("//span[contains(text(),'Select Store')]")
         
        }

        Retail_Select_Store_Value()
        {
     
         return cy.xpath("//li[text()='RETAIL']")
         
        }

        Retail_Add_New_Item_Button()
        {
     
         return cy.xpath("//button[contains(text(),'+ Add New Item')]")
         
        }
        Retail_Select_An_Item_Dropdown()
        {
     
         return cy.xpath("//span[contains(text(),'Select an item')]")
         
        }

        Retail_Search_Item()
        {
     
         return cy.xpath("//input[@class='k-textbox']")
         
        }
      
      
      
      
        Retail_Select_An_Item_Dropdown_Value()
        {
     
         return cy.xpath("//span[contains(text(),'Blended oil_Cannabis Oil_35ml_Retail')]")
         
        }
        Retail_Submit_Button()
        {
     
         return cy.xpath("//span[contains(text(),'Submit')]")
         
        }
       
        Retail_Assingn_Inventory_Manually()
        {
     
         return cy.xpath("//a[contains(text(),'Assign Inventory Manually')]")
         
        }
        Retail_Add_Package()
        {
     
         return cy.xpath("//a[contains(text(),'Add Package')]")
         
        }


        Retail_Select_Package()
        {
     
         return cy.xpath("//span[contains(text(),'Select Package')]")
         
        }


        Retail_Select_Package_Value()
        {
     
         return cy.xpath("//span[contains(text(),'FLSRWGA-20190329-004')]")
         
        }


        Retail_Enter_Package_Qty()
        {
     
         return cy.xpath("//div[1]/div[1]/div[2]/span[1]/span[1]/input[1]")
         
        }
        
        Retail_Enter_Package_Qty_value()
        {
     
        
          return cy.xpath("//input[@class='k-input']")
          
                  
        }


        Retail_Complete_Package_Button()
        {
     
         return cy.xpath("//button[contains(text(),'Complete Packing')]")
         
        }
        POS_URL()
        {
     
         return cy.visit("https://ohio-uat-pos.k8s.flourishsoftware.com/")
         
        }
    
        POS_Login_Username()
        {
     
         return cy.xpath("//input[@id='email']")
         
        }
    
        POS_Login_Password()
        {
     
         return cy.xpath("//input[@id='password']")
         
        }
        POS_Login_Submit_Button()
        {
     
         return cy.xpath("//span[contains(text(),'Login')]")
         
        }
       
        POS_Select_Cultivation_Facility()
        {
     
         return cy.xpath("//span[text()='CULTIVATION FACILITY']")
         
        }
    
        POS_Select_Retail_Facility()
        {
     
         return cy.xpath("//li[text()='RETAIL']")
         
        }
    
        POS_Enter_Pin_1(text)
        {
     
         return cy.xpath(`//span[contains(text(),'${text}')]`)
         
        }
      
        POS_Queue_Option()
        {
     
         return cy.xpath("//a[contains(text(),'Queue')]")
         
        }

        POS_Delivery_Option()
        {
     
         return cy.xpath("//a[contains(text(),'Deliveries')]")
         
        }
        
        
        POS_Sales_histories()
        {
     
         return cy.xpath("//a[contains(text(),'Sales History')]")
         
        }
               
        
        POS_Shop_Option()
        {
     
         return cy.xpath("//a[contains(text(),'Shop')]")
         
        }
        
        POS_Small_ProgressBar()
        {
     
         return cy.xpath("//i[@class='fa fa-spinner fa-lg fa-spin']")
         
        }
     
        POS_Sales_Histories_Type_Name()
        {
     
         return cy.xpath("//input[@placeholder='Search Purchase ID, Patient ID or Customer Name (minimum 3 characters)']")
         
        }
        POS_Select_orderid()
        {
     
         return cy.xpath("//tr[1]//td[1]/button")
         
        }
        POS_Validate_Button()
        {
     
         return cy.xpath("//button[contains(text(),'Validate')]")
         
        }
       
        POS_Closestore()
        {
     
         return cy.xpath("//span[contains(text(),'Close')]")
         
        }

        POS_payment()
        {
     
         return cy.xpath("//button[contains(text(),'Pay')]")
         
        }
      
        POS_Canpay_Manual_payment()
        {
     
         return cy.xpath("//label[contains(text(),'Manual Payment')]")
         
        }
      
        POS_Select_Till()
        {
     
         return cy.xpath("//span[contains(text(),'Select a Till')]")
         
        }

        POS_Select_Till_value()
        {
     
         return cy.xpath("//li[text()='Automation Till Counter 2']")
         
        }
        
        
        POS_Select_Till_Yes_Button()
        {
     
         return cy.xpath("//button[contains(text(),'Yes')]")
         
        }

        POS_Get_Value()
        {
     
         return cy.xpath("//div[@class='item-value header-font']")
         
        }
        POS_Enter_Canpay_Amount()
        {
     
         return cy.xpath("//input[@class='k-input k-formatted-value']")
         
        }
        POS_SelectPayment_Method()
        {
     
         return cy.xpath("//div[contains(text(),'Payment Method')]//following::input[1]")
         
        }
        POS_Enter_Canpay_TranscationID()
        {
     
         return cy.xpath("//div[contains(text(),'Transaction ID')]//following::div/input")
         
        }
      
        POS_Record_Epayment()
        {
     
         return cy.xpath("//button[contains(text(),'Record Manual Payment')]")
         
        }
      
        Reconcile_Epayment_Cancel_Button_Web()
        {
     
         return cy.xpath("//a[contains(text(),'Cancel')]")
         
        }
        Reconcile_Epayment_Manual_Can_Pay_web()
        {
     
         return cy.xpath("//strong[contains(text(),'Manual CanPay')]")
         
        }
      
        Reconcile_Epayment_Manual_Can_Pay_Amount_web()
        {
     
         return cy.xpath("//span[contains(text(),'Manual CanPay Sales')]//following::div[1]")
         
        }
      
      }

