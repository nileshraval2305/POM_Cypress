///<reference types="Cypress" />


export default class Moveclonetovegitationelements
{

   
   Grow_cloning_groups() {
        return cy.xpath("//span[contains(text(),'Cloning groups')]")
    }
    Grow_Searchgroup_Dropdown(){
        return cy.get('#main_container > ui-view > grow > div.module-container > div > div > clone > div > div > div > manage-groups > div > div > div > div.manage-groups-area-and-group-selectors-container.col-sm-3.col-xs-4 > div:nth-child(3) > common-dropdown')
    }
    Grow_Select_Clone_Group(){
        return cy.xpath("//span[@id='selectesItemListId0']")
       }
     
     
      Grow_Action_Button()
      {
        return cy.get('#group-action-toggle-menu')

      }
      
       Grow_Move_Group(){
        return cy.xpath("//span[contains(text(),'Move group')]")
    }

    Grow_Select_Areatype(){
        return cy.get('body.ng-scope.ng-tns-0-0.modal-open:nth-child(2) div.modal.tag-group-area-modal-component.fade.ng-scope.ng-isolate-scope.in:nth-child(1) div.modal-dialog.modal-lg div.modal-content tag-group-area-modal.ng-scope.ng-isolate-scope div.modal-container div.modal-body form.tag-group-area-form.ng-valid.ng-dirty.ng-valid-parse div.modal-body.tag-group-area-modal-body div.row.tag-group-area-configuration-row.ng-scope div.tag-group-area-configuration-div div.row.tag-group-area-select-strains-row div.tag-group-area-select-strains-div div.row.tag-group-area-form-row.tag-group-area-select-area-row:nth-child(4) div.col-xs-4.col-sm-4.col-md-4.col-lg-4:nth-child(1) div.tag-group-area-select-area-div div.tag-group-area-form-input-div.tag-group-area-form-area-type-and-area-selector-div div.row.tag-group-area-form-area-selector-row div.tag-group-area-form-area-type-selector-div area-type-selector.tag-group-area-selector.ng-isolate-scope span.k-widget.k-dropdown.area-type-selector-dropdown span.k-dropdown-wrap.k-state-default > span.k-input.ng-scope')
    }
    
    Grow_survialrate_load(){
        return cy.xpath("//b[contains(text(),'survival rate')]")
    }
    
  
  
    Grow_Enter_DateandTime()
    {
        
        return cy.get('#moveDateTime')
    }

    Grow_gettotalplant(){
        return cy.get('#count-total-group-plants')
    }

    Grow_Select_Destination_Area(){
        
        return cy.xpath("//span[contains(text(),'Select Destination Area')]")
    }

    Grow_Select_Tag(){
        
        return cy.xpath("//a[contains(text(),'Select first')]")
        
    }
    
    Grow_Create_DateandTime(){
       cy.wait(10000)
        return cy.xpath("//span[contains(text(),'Now')]")
    }


    Grow_Confirm_Move_Button(){
        
        return cy.get('body.ng-scope.modal-open:nth-child(2) div.modal.tag-group-area-modal-component.fade.ng-scope.ng-isolate-scope.in:nth-child(1) div.modal-dialog.modal-lg div.modal-content tag-group-area-modal.ng-scope.ng-isolate-scope div.modal-container div.modal-footer save-button.ng-isolate-scope:nth-child(2) > button.btn.flourish-submit-button')
        
    }

   
   
    Grow_Get_Plantid_Creation_Msg(){
        
        return cy.get('#add-plants-to-group-ui-view > div > add-plants-to-group > div > div > div.plant-ids-created.ng-binding.ng-scope')
    }

}