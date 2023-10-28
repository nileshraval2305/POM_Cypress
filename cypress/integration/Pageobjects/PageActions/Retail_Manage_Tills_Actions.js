///<reference types="Cypress" />

import Retail_Manage_Tills_Elements from '../PageElements/Retail_Manage_Tills_Elements'


export default class Retail_Manage_Tills_Actions

{

constructor()
{

globalThis.element = new Retail_Manage_Tills_Elements()
}

Retail_manage_tills_event()
{
    //element.Viewport()
    element.Retail().click()
   
    element.Page_Loader().should('be.visible')
    cy.wait(2000)
    element.Tillmodule().then((button)=>
    {
        //element.Tillmenu().should('be.visible')
        button.trigger('mouseover').click()
        
     
    })
    
    //element.Tillmodule().click()
    
    element.ManageTills().should('be.visible').click()
   // element.ManageTills().contains('Manage tills').click({force:true}).click();

    
}

Retail_Module()
{
    element.Retail().click()
    cy.log('Click on Retail module')
 
} 

Retail_Till_Module()
{
    element.Page_Loader().should('be.visible')
    cy.wait(2000)
    element.Tillmodule().then((button)=>
    {
        //element.Tillmenu().should('be.visible')
        button.trigger('mouseover').click()
        
     
    })


} 




Validatecashvault_functionality()
{
    var Amount = (Math. floor(Math. random() * 10000) + 10000). toString(). substring(1);
     var Count5=0
     var Count4=0
     var Count3=0
     var Count2=0
     var Count1=0
     var Gettotalcashfromweb=0
     var GetTotalcashinvaultamount=0
     var Totalamount=0
     var Cashamount_In_Till_Report=0

      element.Countvalut().click()
   
     
    element.Automation_Sub_Tillu_Count().then((Zero)=>
    {
        element.Automation_Sub_Tillu_Count().type(Amount).tab()
        
       // element.Varience_Reason_5().type('Reason 5')
   
    })
   
   
   
    element.Getvarience_Reason5_dropdown().then(($e1)=>
    {

      
        element.Getvarience_Reason5_dropdown().click()
        element.Getvarience_Reason5_dropdown().type('mis')
        element.Getvarience_Reason5_dropdown().type('{enter}')
    })
   
    element.varience_Notes5().then(($e1)=>
    {

      
        
        element.varience_Notes5().type('notes5')
    })
   
   
   
    element.Automation_Sub_Tillu_Count().should('have.attr', 'aria-valuenow').then(function(Value5)
    {
       Count5=Value5
        // window['Count5']=55
       cy.log('Amount of five subvalut is',Count5)
     
    })
   

    element.Automation_Zero_Amount_Count().then((Zero)=>
    {
        element.Automation_Zero_Amount_Count().type(Amount).tab()
       
        //element.Varience_Reason_4().type('Reason 4')
          
       
    })
    
    element.Getvarience_Reason4_dropdown().then(($e1)=>
    {

      
        element.Getvarience_Reason4_dropdown().click()
        element.Getvarience_Reason4_dropdown().type('mis')
        element.Getvarience_Reason4_dropdown().type('{enter}')
    })
   
    element.varience_Notes4().then(($e1)=>
    {

      
        
        element.varience_Notes4().type('notes4')
    })
    
    
    
    element.Automation_Zero_Amount_Count().should('have.attr', 'aria-valuenow').then(function(Value4)
    {
       
        Count4 = Value4
       cy.log('Amount of four subvalut is',Count4)
    })
   
   
    element.Automation_Deposit_SubVault_Count().then((Automation_deposit)=>
    {
        element.Automation_Deposit_SubVault_Count().type(Amount).tab()
        //element.Varience_Reason_3().type('Reason 3')
    })
    
    element.Getvarience_Reason3_dropdown().then(($e1)=>
    {

      
        element.Getvarience_Reason3_dropdown().click()
        element.Getvarience_Reason3_dropdown().type('mis')
        element.Getvarience_Reason3_dropdown().type('{enter}')
    })
    
    element.varience_Notes3().then(($e1)=>
    {

      
        
        element.varience_Notes3().type('notes3')
    })
    
   
   
   
    element.Automation_Deposit_SubVault_Count().should('have.attr', 'aria-valuenow').then(function(Value3)
    {
       
        Count3 = Value3
       cy.log('Amount of three subvalut is',Count3)
    })
    element.Coinbag_Subvault_Count().then((coinbag)=>
    {
        element.Coinbag_Subvault_Count().type(Amount).tab()
        //element.Varience_Reason_2().type('Reason 2')
    })
  
    element.Getvarience_Reason2_dropdown().then(($e1)=>
    {

      
        element.Getvarience_Reason2_dropdown().click()
        element.Getvarience_Reason2_dropdown().type('mis')
        element.Getvarience_Reason2_dropdown().type('{enter}')
    })
   
    
    element.varience_Notes2().then(($e1)=>
    {

      
        
        element.varience_Notes2().type('notes2')
    })
    
    
    
    element.Coinbag_Subvault_Count().should('have.attr', 'aria-valuenow').then(function(Value2)
    {
       
       Count2 = Value2
       cy.log('Amount of two subvalut is',Count2)
    })
   
    element.Cashbag_Subvault_Count().then((cashbag)=>
    {
        element.Cashbag_Subvault_Count().type(Amount).tab()
        
    })
  
    element.Getvarience_Reason1_dropdown().then(($e1)=>
    {

      
        element.Getvarience_Reason1_dropdown().click()
        element.Getvarience_Reason1_dropdown().type('mis')
        element.Getvarience_Reason1_dropdown().type('{enter}')
    })
   
    element.varience_Notes1().then(($e1)=>
    {

      
        
        element.varience_Notes1().type('notes1')
    })
    
    
    
    element.Cashbag_Subvault_Count().should('have.attr', 'aria-valuenow').then(function(Value1)
    {
       
        Count1 = Value1
       
        cy.log('Amount of one subvalut is',Count1)
    })
    
    
     

    element.GetNewtotalCash().then(($e1)=>
    {

        Gettotalcashfromweb=$e1.text().replace('$','').replace(',','');
        cy.log('Total new cash amount from web',Gettotalcashfromweb)
        
        cy.log('Amount of one subvalut is',Count1)
        Totalamount = Number(Count5)+Number(Count4)+Number(Count3)+Number(Count2)+Number(Count1)
        Totalamount = Totalamount.toFixed(2)
       
        cy.log('calculate total amount is',Totalamount)
   
          if(Gettotalcashfromweb==Totalamount)
          {
            cy.log('calculation of Amount is showing correct')

          }
   else
     {

        cy.log('calculation of amount is showing wrong')
     }
    })   
    
       
    
    //element.Scriollintoview()
   
   
    
  
    element.Report_Cash_Button().scrollIntoView().should('be.visible').then(($Element)=>
    {

        $Element.click()
        cy.log('Click on Report Balance button')

    })
     
   
    element.Vault_Update_Message().should('be.visible')
    
    element.Module_Loader_Large().should('not.be.visible').then(($e2)=>
    {

       
        element.GetTotalcashinvaultamount().should('be.visible').then(($e1)=>
        {
            
            GetTotalcashinvaultamount=$e1.text().replace('$','').replace(',','');
            
            cy.log('Total Cash valut amount from web',GetTotalcashinvaultamount)
            cy.log('Total amount from calculation',Totalamount)
           
       
              if(parseFloat(Totalamount)==parseFloat(GetTotalcashinvaultamount))
              {
                cy.log('calculation of Total Vault is showing correct',Totalamount)
    
              }
       else
         {
            
            cy.log('calculation of Total vault is not correct')
         }
        })   
    })
   
   
    
   
    
}

Validate_Manage_SubVault()
{
   
    var beforecashbagamount=0;
    var beforecoinbagamount=0;
    var calculatecashbagamount=0; 
    var calculatecoinbagamount =0
    var aftercashbagamount=0;
    var aftercoinbagamount=0;

    element.get_Cash_bag_Text().then(function(Value1)
    {
       
        beforecashbagamount = Value1.text().replace('$','').replace(',','')
       
        cy.log(' Before Amount of Cash bag of subvalut is',beforecashbagamount)
    })
    // one function is completed
    
    element.get_Coin_bag_Text().then(function(Value2)
    {
       
        beforecoinbagamount = Value2.text().replace('$','').replace(',','')
       
        cy.log(' Before Amount of Coin bag subvalut is',beforecoinbagamount)
    })
    
    
    element.Managesubvaults().click()
    cy.log('Click on Manage subvalut option')
   
      
   
   
   
   
   
      element.Cash_Amount_To_Move().should('be.visible').then(($e1)=>
    {

        element.Cash_Amount_To_Move().type('500')
        cy.log('Enter cash amont which need to move')
    })
   
    element.From_SubVault().should('be.visible').then(($e1)=>
    {

        element.From_SubVault().click()
        
        //element.from_SubVault_1().type('cash bag')
       // cy.wait(1000)
        //element.from_SubVault_1().type('{downarrow}') 
        element.from_SubVault_1().should('be.visible').click()

       
    })

    element.To_SubVault().should('be.visible').then(($e1)=>
    {

        element.To_SubVault().click()
       // cy.wait(1000)
        element.To_SubVault_1().should('be.visible').click()
        
        cy.log('Select Coin Bag Sub vault')
    })

    element.Reasoncode().should('be.visible').then(($e1)=>
    {

        element.Reasoncode().click()
        //cy.wait(1000)
        element.Reasoncode_1().click()
       
        cy.log('Select reason code')
    })
    element.Notes().should('be.visible').then(($e1)=>
    {

       
  
        element.Notes().type('Automation_Notes')
        cy.log('Enter Notes')
        
    })
    //element.Network_checkbox().click()
    //cy.log('Remove Network Printer checkbox')
 
   
    element.manage_Subvault_Submit_Button().click()
    cy.log('Click on Submit button')
   
   
    element.manage_Dismiss_Button().should('be.visible').then(($e1)=>
    {
         
        calculatecashbagamount =parseFloat(beforecashbagamount)-500;
        
        calculatecashbagamount = calculatecashbagamount.toFixed(2)
        cy.log('Calculate Value of after cashbag amount',calculatecashbagamount)
         calculatecoinbagamount= parseFloat(beforecoinbagamount)+500;
         calculatecoinbagamount = calculatecoinbagamount.toFixed(2)
       
         cy.log('Calculate Value of after coin bag amount',calculatecoinbagamount)
       
        element.manage_Dismiss_Button().click()
        cy.log('Click on Dismiss button')
      


    })
    
    
    element.Tillmodule().then((button)=>
    {
        //element.Tillmenu().should('be.visible')
        button.trigger('mouseover').click()
        
     
    })
    
    //element.Tillmodule().click()
    
    element.ManageTills().should('be.visible').click()
       
        element.get_Cash_bag_Text().should('be.visible').then(function(Value1)
        {
           
            aftercashbagamount = Value1.text().replace('$','').replace(',','')
           
            cy.log('After Amount of Cash bag of subvalut is',aftercashbagamount)
        })
        
        
        element.get_Coin_bag_Text().should('be.visible').then(function(Value2)
        {
           
            aftercoinbagamount = Value2.text().replace('$','').replace(',','')
           
            cy.log('After Amount of Coin bag subvalut is',aftercoinbagamount)
            cy.log('Calculate Value of after coin bag amount',calculatecoinbagamount)
       
            if(parseFloat(calculatecoinbagamount)==parseFloat(aftercoinbagamount))
            {
    
                cy.log('Coin Bag Amount of subvault is showing correct')
    
            }
            else
            {
    
                cy.log('Coin Bag Amount of subvault is not correct')
    
            }
            cy.log('Calculate Value of after cash bag amount',calculatecashbagamount)
            if(parseFloat(calculatecashbagamount)==parseFloat(aftercashbagamount))
            {
    
                cy.log('Cash Bag Amount of subvault is showing correct')
    
            }
            else
            {
    
                cy.log('Cash Bag Amount of subvault is not correct')
    
            } 
       


    })

}

   
   
   
    validate_Manage_SubVault_Amount_Greaterthan_Current_Subvault()
    {
       
        var beforecashbagamount=0;
        var beforecoinbagamount=0;
        var calculatecashbagamount=0; 
        var calculatecoinbagamount =0
        var aftercashbagamount=0;
        var aftercoinbagamount=0;
    
        element.get_Cash_bag_Text().then(function(Value1)
        {
           
            beforecashbagamount = Value1.text().replace('$','').replace(',','')
           
            cy.log(' Before Amount of Cash bag of subvalut is',beforecashbagamount)
        })
        
        
        element.get_Coin_bag_Text().then(function(Value2)
        {
           
            beforecoinbagamount = Value2.text().replace('$','').replace(',','')
           
            cy.log(' Before Amount of Coin bag subvalut is',beforecoinbagamount)
        })
        
        
        element.Managesubvaults().click()
        cy.log('Click on Manage subvalut option')
       
          
       
       
       
       
       
          element.Cash_Amount_To_Move().should('be.visible').then(($e1)=>
        {
    
            element.Cash_Amount_To_Move().type('50000')
            cy.log('Enter cash amont which need to move')
        })
       
        element.From_SubVault().should('be.visible').then(($e1)=>
        {
    
            element.From_SubVault().click()
            
            //element.from_SubVault_1().type('cash bag')
           // cy.wait(1000)
            //element.from_SubVault_1().type('{downarrow}') 
            element.from_SubVault_1().should('be.visible').click()
    
           
        })
    
        element.To_SubVault().should('be.visible').then(($e1)=>
        {
    
            element.To_SubVault().click()
           // cy.wait(1000)
            element.To_SubVault_1().should('be.visible').click()
            
            cy.log('Select Coin Bag Sub vault')
        })
    
        element.Reasoncode().should('be.visible').then(($e1)=>
        {
    
            element.Reasoncode().click()
            //cy.wait(1000)
            element.Reasoncode_1().click()
           
            cy.log('Select reason code')
        })
        element.Notes().should('be.visible').then(($e1)=>
        {
    
           
      
            element.Notes().type('Automation_Notes')
            cy.log('Enter Notes')
            
        })
        //element.Network_checkbox().click()
        //cy.log('Remove Network Printer checkbox')
     
       
        element.manage_Subvault_Submit_Button().click()
        cy.log('Click on Submit button')
       
       
        element.submit_Msg_when_Amount_is_more().should('be.visible').then(function(msg)
        {
             
            var actualmsg = msg.text().toString()
              cy.log("Message is",actualmsg)
            var expectedmsg= 'There was a problem while creating the pay-out: pay-out amount exceeds current available balance in the source sub-vault till Cash bag'
            
            if(actualmsg.localeCompare(expectedmsg.toString()))
            {

                cy.log('Message is showing correct')

            }
    
            else
            {
                cy.log('There is an issue with Message')

            }
        })
        
    }


    ValidateTill_Report_Functionality()
    {
        var Amount = (Math. floor(Math. random() * 10000) + 10000). toString(). substring(1);
         var Count5=0
         var Cashamount_In_Till_Report=0
         var Count3=0
         var Count2=0
         var Count1=0
         var Gettotalcashfromweb=0
         var GetTotalcashinvaultamount=0
         var Totalamount=0
        
    
          element.Countvalut().click()
       
         
        element.Vault_Count_Title().should('be.visible').then((Zero)=>
        {
            element.Coinbag_Subvault_Checkbox().click()
            cy.log('Un check coin bag')
            element.automation_Deposit_SubVault_Checkbox().click()
            cy.log('Un check automation_Deposit_SubVault_Checkbox')

            element.automation_Zero_Amount_Subvalut_Checkbox().click()
            cy.log('Un check automation_Zero_Amount_Subvalut_Checkbox')
            element.subtillu_Amount__Subvault_Checkbox().click()
            cy.log('Un check subtillu_Amount__Subvault_Checkbox')
       
        })
       
       
        element.Cashbag_Subvault_Count().then((cashbag)=>
        {
            element.Cashbag_Subvault_Count().type(Amount).tab()
            
        })
      
        element.Getvarience_Reason1_dropdown().then(($e1)=>
        {
    
          
            element.Getvarience_Reason1_dropdown().click()
            element.Getvarience_Reason1_dropdown().type('mis')
            element.Getvarience_Reason1_dropdown().type('{enter}')
        })
       
        element.varience_Notes1().then(($e1)=>
        {
    
          
            
            element.varience_Notes1().type('notes1')
        })
        
        
        
        element.Cashbag_Subvault_Count().should('have.attr', 'aria-valuenow').then(function(Value1)
        {
           
            Count1 = Number(Value1)
            Count1 = Count1.toFixed(2)
            cy.log('Amount of one subvalut is',Count1)
        })
        
        
        element.Report_Cash_Button().scrollIntoView().should('be.visible').then(($Element)=>
        {
    
            $Element.click()
            cy.log('Click on Report Balance button')
    
        })
         
    
        element.Module_Loader_Large().should('be.visible').then(($e2)=>{
       
        element.till_Report().scrollIntoView().should('be.visible').then(($Element)=>
        {
    
            $Element.click()
            cy.log('Click on Till Report')
    
        })
    })
       
        element.till_Dropdown().should('be.visible').then(($Element)=>
        {
    
            $Element.click()
            cy.log('Click on till Dropdown')
            element.till_Select_Dropdown_Value().click()
            cy.log('Selct Value of dropdown')
        })
        element.till_Report_Timestamp().should('be.visible').then(($Element)=>
        {
    
            element.till_Report_Timestamp().click()
            cy.log('Click on time stamp Dropdown')
            element.till_Report_Timestamp().click()
            cy.log('Click on again time stamp Dropdown')
        })
       
        element.Page_Loader().should('have.length', 0)
        element.till_Report_Timestamp_Desending().should('be.visible').then(function($e1)
        {
       
        element.till_Report_Get_Cash().should('be.visible').then(function(cash)
        {
           
            Cashamount_In_Till_Report = cash.text().replace('$','').replace(',','')
           
            cy.log(' Cash amount of till report is',Cashamount_In_Till_Report)
            cy.log(' count 1 of which we have enter ',Count1)
        
            if(parseFloat(Cashamount_In_Till_Report)==parseFloat(Count1))
            {
    
                cy.log('Cash Bag Amount from Till report is showing correct')
    
            }
            else
            {
    
                cy.log('Cash Bag Amount from Till report is not correct')
    
            } 
       
        })
        
        })
        
    }


    Validate_Manage_SubVault_Till_Report()
    {
       
        var beforecashbagamount=0;
        var beforecoinbagamount=0;
        var calculatecashbagamount=0; 
        var calculatecoinbagamount =0
        var aftercashbagamount=0;
        var aftercoinbagamount=0;
        var Cashamount_In_Till_Report=0
        element.get_Cash_bag_Text().then(function(Value1)
        {
           
            beforecashbagamount = Value1.text().replace('$','').replace(',','')
           
            cy.log(' Before Amount of Cash bag of subvalut is',beforecashbagamount)
        })
        // one function is completed
        
        element.get_Coin_bag_Text().then(function(Value2)
        {
           
            beforecoinbagamount = Value2.text().replace('$','').replace(',','')
           
            cy.log(' Before Amount of Coin bag subvalut is',beforecoinbagamount)
        })
        
        
        element.Managesubvaults().click()
        cy.log('Click on Manage subvalut option')
        
       
       
       
       
       
          element.Cash_Amount_To_Move().should('be.visible').then(($e1)=>
        {
    
            element.Cash_Amount_To_Move().type('500')
            cy.log('Enter cash amont which need to move')
        })
       
        element.From_SubVault().should('be.visible').then(($e1)=>
        {
    
            element.From_SubVault().click()
            
            //element.from_SubVault_1().type('cash bag')
           // cy.wait(1000)
            //element.from_SubVault_1().type('{downarrow}') 
            element.from_SubVault_1().should('be.visible').click()
    
           
        })
    
        element.To_SubVault().should('be.visible').then(($e1)=>
        {
    
            element.To_SubVault().click()
           // cy.wait(1000)
            element.To_SubVault_1().should('be.visible').click()
            
            cy.log('Select Coin Bag Sub vault')
        })
    
        element.Reasoncode().should('be.visible').then(($e1)=>
        {
    
            element.Reasoncode().click()
            //cy.wait(1000)
            element.Reasoncode_1().click()
           
            cy.log('Select reason code')
        })
        element.Notes().should('be.visible').then(($e1)=>
        {
    
           
      
            element.Notes().type('Automation_Notes')
            cy.log('Enter Notes')
            
        })
        //element.Network_checkbox().click()
        //cy.log('Remove Network Printer checkbox')
     
       
        element.manage_Subvault_Submit_Button().click()
        cy.log('Click on Submit button')
       
       
        element.manage_Dismiss_Button().should('be.visible').then(($e1)=>
        {
             
            calculatecashbagamount =parseFloat(beforecashbagamount)-500;
            
            calculatecashbagamount = calculatecashbagamount.toFixed(2)
            cy.log('Calculate Value of after cashbag amount',calculatecashbagamount)
             calculatecoinbagamount= parseFloat(beforecoinbagamount)+500;
             calculatecoinbagamount = calculatecoinbagamount.toFixed(2)
           
             cy.log('Calculate Value of after coin bag amount',calculatecoinbagamount)
           
            element.manage_Dismiss_Button().click()
            cy.log('Click on Dismiss button')
          
    
    
        })
        
        
        element.Tillmodule().then((button)=>
        {
            //element.Tillmenu().should('be.visible')
            button.trigger('mouseover').click()
            
         
        })
        
        //element.Tillmodule().click()
        
        element.ManageTills().should('be.visible').click()
           
            element.get_Cash_bag_Text().should('be.visible').then(function(Value1)
            {
               
                aftercashbagamount = Value1.text().replace('$','').replace(',','')
               
                cy.log('After Amount of Cash bag of subvalut is',aftercashbagamount)
            })
            
            
            element.get_Coin_bag_Text().should('be.visible').then(function(Value2)
            {
               
                aftercoinbagamount = Value2.text().replace('$','').replace(',','')
               
                cy.log('After Amount of Coin bag subvalut is',aftercoinbagamount)
                cy.log('Calculate Value of after coin bag amount',calculatecoinbagamount)
           
                if(parseFloat(calculatecoinbagamount)==parseFloat(aftercoinbagamount))
                {
        
                    cy.log('Coin Bag Amount of subvault is showing correct')
        
                }
                else
                {
        
                    cy.log('Coin Bag Amount of subvault is not correct')
        
                }
                cy.log('Calculate Value of after cash bag amount',calculatecashbagamount)
                if(parseFloat(calculatecashbagamount)==parseFloat(aftercashbagamount))
                {
        
                    cy.log('Cash Bag Amount of subvault is showing correct')
        
                }
                else
                {
        
                    cy.log('Cash Bag Amount of subvault is not correct')
        
                } 
           
    
    
        })
    
        element.Module_Loader_Large().should('be.visible').then(($e2)=>{
       
            element.till_Report().scrollIntoView().should('be.visible').then(($Element)=>
            {
        
                $Element.click()
                cy.log('Click on Till Report')
        
            })
        })
           
            element.till_Dropdown().should('be.visible').then(($Element)=>
            {
        
                $Element.click()
                cy.log('Click on till Dropdown')
                element.till_Select_Dropdown_Value_Coin_Bag().click()
                cy.log('Selct Value of dropdown')
            })
            element.till_Report_Timestamp().should('be.visible').then(($Element)=>
            {
        
                element.till_Report_Timestamp().click()
                cy.log('Click on time stamp Dropdown')
                element.till_Report_Timestamp().click()
                cy.log('Click on again time stamp Dropdown')
            })
           
            element.Page_Loader().should('have.length', 0)
            element.till_Report_Timestamp_Desending().should('be.visible').then(function($e1)
            {
           
            element.till_Report_Get_Cash().should('be.visible').then(function(cash)
            {
               
                Cashamount_In_Till_Report = cash.text().replace('$','').replace(',','')
               
                cy.log(' coin amount of till report is',Cashamount_In_Till_Report)
                cy.log(' After coin Bag amount ',aftercoinbagamount)
            
                if(parseFloat(Cashamount_In_Till_Report)==parseFloat(aftercoinbagamount))
                {
        
                    cy.log('Coin Bag Amount from Till report is showing correct')
        
                }
                else
                {
        
                    cy.log('Coin Bag Amount from Till report is not correct')
        
                } 
           
            })
    
    
    
    
    
    
    
    
    
    })


}

}
