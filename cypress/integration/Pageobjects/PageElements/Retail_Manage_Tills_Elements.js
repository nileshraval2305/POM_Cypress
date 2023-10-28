///<reference types="Cypress" />
/// <reference types="cypress-xpath" />


export default class Retail_Manage_Tills_Elements
{

   Retail()
   {

    return cy.get('#nav-retail > div > p')
    
   }

    Tillmodule() {
        //return cy.xpath("//span[normalize-space()='Tills']")
        return cy.get('body.ng-scope:nth-child(2) div.main div.wrapper div.page-area div.content-view-container.ng-scope ui-view.ng-scope app.ng-scope.ng-isolate-scope div.main_container:nth-child(1) ui-view.ng-scope retail.ng-scope.ng-isolate-scope div.module-tabs-row:nth-child(1) div.module-tabs-container module-tabs.ng-isolate-scope div.module-tabs-section-tab-background.wmsight-submodule-tab-background-row div.module-tabs-component-tab-list.wmsight-submodule-tab-list.ng-isolate-scope ul.nav.nav-tabs li.module-tabs-component-tab-list-item.module-tabs-tab-2.wmsight-submodule-tab-2.wmsight-submodule-tab-registers.wmsight-submodule-tab.uib-tab.nav-item:nth-child(3) a.nav-link.ng-binding uib-tab-heading.module-tabs-component-tab-list-item-heading.ng-scope.dropdown-tab-heading span.module-tabs-component-tab-list-heading-dropdown.dropdown.ng-scope > span.module-tabs-component-tab-list-heading-dropdown-toggle.dropdown-toggle.module-tab-menu-items.ng-binding')
    }
    ManageTills(){
        //return cy.xpath("//li[3]/a[1]/uib-tab-heading[1]/span[1]/ul[1]/li[1]")
        return cy.get('.module-tabs-tab-2 > .nav-link > .module-tabs-component-tab-list-item-heading > .module-tabs-component-tab-list-heading-dropdown > .module-tabs-component-tab-list-dropdown-menu > :nth-child(1) > .module-tabs-menu-items')
    }
    
    Tillmenu(){
        return cy.get('span[class="module-tabs-component-tab-list-heading-dropdown dropdown ng-scope open"] ul[class="module-tabs-component-tab-list-dropdown-menu dropdown-menu"]')
    }

    Countvalut()
    {

        return cy.get('div[id="till-1"] a[class="flourish-submit-anchor card-settings-child-level-name"]')

    }

    Cashbag_Subvault_Count()
    {

        return cy.xpath("//span[normalize-space()='Cash bag Count']//following::span[1]/input")

    }
    Coinbag_Subvault_Count()
    {

        return cy.xpath("//span[normalize-space()='Coin Bag Count']//following::span[1]/input")

    }
    Automation_Deposit_SubVault_Count()
    {

        return cy.xpath("//span[normalize-space()='Automation Deposit SubVault Count']//following::span[1]/input")

    }
  
   
    Automation_Zero_Amount_Count()
    {

        return cy.xpath("//span[normalize-space()='Automation Zero Amount Count']//following::span[1]/input")

    }
    
    Automation_Sub_Tillu_Count()
    {

        return cy.xpath("//span[normalize-space()='Sub Tillu Count']//following::span[1]/input")

    }

   
    Report_Cash_Button()
    {

        return cy.xpath("//span[contains(text(),'Report Cash Balance')]")

    }

   Scriollintoview()
   {
    return cy.scrollTo('bottom')

   }

   Scrollup()
   {
    return cy.scrollTo('top')

   }

   Page_Loader()
   {

    return cy.xpath("//div[@class='k-loading-image']")


   }

   Varience_Reason_1()
   {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]/textarea[1]")


   }


   Varience_Reason_2()
   {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[4]/div[1]/textarea[1]")


   }

   Varience_Reason_3()
   {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[4]/div[1]/textarea[1]")


   }

   Varience_Reason_4()
   {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[4]/div[1]/textarea[1]")


   }

   Varience_Reason_5()
   {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[6]/div[4]/div[1]/textarea[1]")


   }

  Viewport(){
     cy.viewport(1280,720)

  }


 GetNewtotalCash()
 {

    return cy.xpath("//span[contains(text(),'New Total Cash')]//following::div[1]/strong")

 }
 GetTotalcashinvaultamount()
 {

    return cy.xpath("(//span[contains(text(), 'Cash In Vault: ')])[1]//following::span[1]")

 }

 Getvarience_Reason1_dropdown()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/span[1]/filterable-dropdown[1]/kendo-dropdownlist[1]/span[1]/span[2]")

 }

 Getvarience_Reason2_dropdown()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[3]/span[1]/filterable-dropdown[1]/kendo-dropdownlist[1]/span[1]/span[2]")

 }

 Getvarience_Reason3_dropdown()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[3]/span[1]/filterable-dropdown[1]/kendo-dropdownlist[1]/span[1]/span[2]")

 }

 Getvarience_Reason4_dropdown()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[3]/span[1]/filterable-dropdown[1]/kendo-dropdownlist[1]/span[1]/span[2]")

 }

 Getvarience_Reason5_dropdown()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[5]/div[3]/span[1]/filterable-dropdown[1]/kendo-dropdownlist[1]/span[1]/span[2]")

 }

 varience_Notes1()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[5]/form-textarea[1]/div[1]/textarea[1]")

 }

 varience_Notes2()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[5]/form-textarea[1]/div[1]/textarea[1]")

 }

 varience_Notes3()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[5]/form-textarea[1]/div[1]/textarea[1]")

 }
 varience_Notes4()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[5]/form-textarea[1]/div[1]/textarea[1]")

 }

 varience_Notes5()
 {

    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/count-vault[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[5]/div[5]/form-textarea[1]/div[1]/textarea[1]")

 }

 Module_Loader_Large()
 {

    return cy.xpath("//div[@class='module-loading-spinner animated icon-large']")

 }

 Vault_Update_Message()
 {

    return cy.xpath("//div[contains(text(),'Vault count saved successfully.')]")

 }
 Managesubvaults()
 {

    return cy.xpath("//body/app-root[1]/div[1]/div[2]/div[2]/main[1]/div[2]/ui-view[1]/app[1]/div[1]/ui-view[1]/retail[1]/div[2]/div[1]/div[2]/ui-view[1]/ui-view-ng-upgrade[1]/ui-view[1]/registers[1]/div[1]/div[1]/register-card[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

 }

Cash_Amount_To_Move()
{
    return cy.xpath("//input[@class='k-input k-formatted-value']")


}
From_SubVault()
{
    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/till-transaction-modal[1]/div[1]/div[2]/div[10]/div[1]/div[2]/common-dropdown[1]/kendo-dropdownlist[1]/span[1]/span[2]")


}

from_SubVault_1()
{

   return cy.xpath("//li//div//span[contains(text(),'Cash bag')]")

}

To_SubVault()
{
    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/till-transaction-modal[1]/div[1]/div[2]/div[10]/div[2]/div[2]/common-dropdown[1]/kendo-dropdownlist[1]/span/span[2]")


}

To_SubVault_1()
{
    return cy.xpath("//li//div//span[contains(text(),'Coin Bag')]")


}




Reasoncode()
{
    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/till-transaction-modal[1]/div[1]/div[2]/div[12]/div[1]/div[2]/common-dropdown[1]/kendo-dropdownlist[1]/span/span[2]")


}
Reasoncode_1()
{
    return cy.xpath("//li[contains(text(),'Automation_ReasonCode')]")


}

Notes()
{
    return cy.xpath("//textarea[@id='registerNotes']")


}

Network_checkbox()
{
    return cy.xpath("//body/ngb-modal-window[1]/div[1]/div[1]/till-transaction-modal[1]/div[1]/div[2]/div[14]/span[1]/label[1]/span[1]/i[1]")


}

manage_Subvault_Submit_Button()
{
   return cy.xpath("//span[contains(text(),'Submit')]")


}

manage_Dismiss_Button()
{
   return cy.xpath("//a[contains(text(),'Dismiss')]")


}


get_Cash_bag_Text()
{
   
   return cy.xpath("//span[contains(text(),'Cash bag:')]//following::div[1]/span")


}

get_Coin_bag_Text()
{
   
   return cy.xpath("//span[contains(text(),'Coin Bag:')]//following::div[1]/span")


}

Payout_Successful_Msg()
{

   return cy.xpath("//div[contains(text(),'Pay-out successful.')]")


}

Cancel_Button()
{
    return cy.xpath("//a[contains(text(),'Cancel')]")


}

submit_Msg_when_Amount_is_more()
{
    return cy.xpath("//div[contains(text(),'There was a problem while creating the pay-out: pa')]")


}

Coinbag_Subvault_Checkbox()
{

   return cy.xpath("//div[2]/div[1]/div[1]/span[1]/form-toggle[1]/div[1]/span[1]")

   
}


automation_Deposit_SubVault_Checkbox()
{

   return cy.xpath("//div[3]/div[1]/div[1]/span[1]/form-toggle[1]/div[1]/span[1]")

   
}


automation_Zero_Amount_Subvalut_Checkbox()
{

   return cy.xpath("//div[4]/div[1]/div[1]/span[1]/form-toggle[1]/div[1]/span[1]")

   
}


subtillu_Amount__Subvault_Checkbox()
{

   return cy.xpath("//div[5]/div[1]/div[1]/span[1]/form-toggle[1]/div[1]/span[1]")

   
}


Vault_Count_Title()
{
   
   
   return cy.xpath("//h4[contains(text(),'Vault Count')]")
}


till_Report()
{
   
   
   return cy.xpath("//body/app-root[1]/div[1]/div[2]/div[2]/main[1]/div[2]/ui-view[1]/app[1]/div[1]/ui-view[1]/retail[1]/div[2]/div[1]/div[2]/ui-view[1]/ui-view-ng-upgrade[1]/ui-view[1]/registers[1]/div[1]/div[4]/register-card[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/span[1]")
}

till_Dropdown()
{
   
   
   return cy.xpath("//register-selector[1]/span[1]/span[1]/span[2]")
}

till_Select_Dropdown_Value()
{
   
   
   return cy.xpath("//li[text()='Cash bag']")
}


till_Select_Dropdown_Value_Coin_Bag()
{
   
   
   return cy.xpath("//li[text()='Coin Bag']")
}
till_Report_Timestamp()
{
   
   
   return cy.xpath("//thead/tr[1]/th[1]/a[1]")
}

till_Report_Get_Cash()
{
   
   
   return cy.xpath("//tbody/tr[1]/td[3]/span[1]")
}

till_Report_Timestamp_Desending()
{
   
   
   return cy.xpath("//th[@aria-sort='descending']")
}


}