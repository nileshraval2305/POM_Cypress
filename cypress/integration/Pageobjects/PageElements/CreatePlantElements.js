///<reference types="Cypress" />


export default class CreatePlantElements
{

   Grow_CloneModule()
   {

    return cy.get('body.ng-scope:nth-child(2) div.main div.wrapper div.page-area div.content-view-container.ng-scope ui-view.ng-scope app.ng-scope.ng-isolate-scope div.main_container:nth-child(1) ui-view.ng-scope grow.ng-scope.ng-isolate-scope div.module-tabs-row:nth-child(1) div.module-tabs-container module-tabs.ng-isolate-scope div.module-tabs-section-tab-background.wmsight-submodule-tab-background-row div.module-tabs-component-tab-list.wmsight-submodule-tab-list.ng-isolate-scope ul.nav.nav-tabs li.module-tabs-component-tab-list-item.module-tabs-tab-1.wmsight-submodule-tab-1.wmsight-submodule-tab-clone.wmsight-submodule-tab.uib-tab.nav-item:nth-child(2) a.nav-link.ng-binding uib-tab-heading.module-tabs-component-tab-list-item-heading.ng-scope.dropdown-tab-heading span.module-tabs-component-tab-list-heading-dropdown.dropdown.ng-scope > span.module-tabs-component-tab-list-heading-dropdown-toggle.dropdown-toggle.module-tab-menu-items.ng-binding').should('be.visible')
   }

   Grow_Create_Plant() {
        return cy.xpath("//span[contains(text(),'Create plants')]")
    }
    Grow_SelectRoom(){
        return cy.xpath("//span[contains(text(),'Select room')]")
    }
    Grow_Select_Strain_dropdown(){
        return cy.xpath("//common-dropdown[@id='strainSelectorId']")
       }
     
     
      Grow_Select_Cloninggroup()
      {
        return cy.get('#cloneCuttingGroupSelectorId > span > span > span.k-input.ng-scope')

      }
      
       Grow_Enter_totalplants(){
        return cy.xpath("//input[@placeholder='Number greater than 0']")
    }

    Grow_Select_Mothergroup(){
        return cy.get('body.ng-scope.ng-tns-0-0:nth-child(2) div.main div.wrapper div.page-area div.content-view-container.ng-scope ui-view.ng-scope app.ng-scope.ng-isolate-scope div.main_container:nth-child(1) ui-view.ng-scope grow.ng-scope.ng-isolate-scope div.module-container:nth-child(2) div.submodule-container div.grow-ui-view-container.ng-scope clone.ng-scope.ng-isolate-scope div.submodule-child-container div.submodule-child-container div.ng-scope create-plants.ng-scope.ng-isolate-scope div.create-plants-container-row div.create-plants-container div.row.create-plants-form-row div.create-plants-form-container.col-lg-6.col-md-6.col-sm-6.col-xs-12 form.form-horizontal.create-plants-form.ng-valid.ng-valid-minlength.ng-valid-maxlength.ng-valid-required.ng-valid-entity-name-unique.ng-dirty.ng-valid-parse div.form-group.ng-scope:nth-child(3) div.col-sm-8 plant-group-selector.ng-isolate-scope span.k-widget.k-dropdown.plant-group-selector-dropdown > span.k-dropdown-wrap.k-state-default.k-state-hover')
    }
    Grow_EnterPlant_Group_Name(){
        
        return cy.get('#newPlantGroupNameId')
    }

    Grow_Groupname_Is_Visiable(){
        
        return cy.get('#group-name-valid')
    }
    
    
    Grow_Generate_NewPlantid(){
        
        return cy.get('#generateNewPlantId > span')
    }

    Grow_GetCreatePlantDateandTime()
    {
    return cy.xpath("//input[@id='createPlantsDateTime']")

    }
    Grow_Create_Clones(){
        
        return cy.xpath("//button[contains(text(),'CREATE CLONES')]")
    }
    Grow_Get_Plantid_Creation_Msg(){
        
        return cy.get('#add-plants-to-group-ui-view > div > add-plants-to-group > div > div > div.plant-ids-created.ng-binding.ng-scope')
    }

}