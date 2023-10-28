///<reference types="Cypress" />


export default class MoveVegitationtoFloweringelements
{

   
   Grow_Vegitation_Module() {
    //cy.wait(3000)
      return cy.get('body.ng-scope:nth-child(2) div.main div.wrapper div.page-area div.content-view-container.ng-scope ui-view.ng-scope app.ng-scope.ng-isolate-scope div.main_container:nth-child(1) ui-view.ng-scope grow.ng-scope.ng-isolate-scope div.module-tabs-row:nth-child(1) div.module-tabs-container module-tabs.ng-isolate-scope div.module-tabs-section-tab-background.wmsight-submodule-tab-background-row div.module-tabs-component-tab-list.wmsight-submodule-tab-list.ng-isolate-scope ul.nav.nav-tabs li.module-tabs-component-tab-list-item.module-tabs-tab-2.wmsight-submodule-tab-2.wmsight-submodule-tab-veg.wmsight-submodule-tab.uib-tab.nav-item:nth-child(3) a.nav-link.ng-binding uib-tab-heading.module-tabs-component-tab-list-item-heading.ng-scope.dropdown-tab-heading span.module-tabs-component-tab-list-heading-dropdown.dropdown.ng-scope > span.module-tabs-component-tab-list-heading-dropdown-toggle.dropdown-toggle.module-tab-menu-items.ng-binding')
    }
    Grow_Veggroups_Option(){
        cy.wait(2000)
        return cy.get('body.ng-scope:nth-child(2) div.main div.wrapper div.page-area div.content-view-container.ng-scope ui-view.ng-scope app.ng-scope.ng-isolate-scope div.main_container:nth-child(1) ui-view.ng-scope grow.ng-scope.ng-isolate-scope div.module-tabs-row:nth-child(1) div.module-tabs-container module-tabs.ng-isolate-scope div.module-tabs-section-tab-background.wmsight-submodule-tab-background-row div.module-tabs-component-tab-list.wmsight-submodule-tab-list.ng-isolate-scope ul.nav.nav-tabs li.module-tabs-component-tab-list-item.module-tabs-tab-2.wmsight-submodule-tab-2.wmsight-submodule-tab-veg.wmsight-submodule-tab.uib-tab.nav-item.active:nth-child(3) a.nav-link.ng-binding uib-tab-heading.module-tabs-component-tab-list-item-heading.ng-scope.dropdown-tab-heading span.module-tabs-component-tab-list-heading-dropdown.dropdown.ng-scope.open ul.module-tabs-component-tab-list-dropdown-menu.dropdown-menu li.module-tabs-component-tab-list-dropdown-menu-item:nth-child(1) > span.module-tabs-menu-items.ng-binding')
    }
    Grow_Veggroups_Group_Dropdown(){
        return cy.get('body.ng-scope.ng-tns-0-0:nth-child(2) div.main div.wrapper div.page-area div.content-view-container.ng-scope ui-view.ng-scope app.ng-scope.ng-isolate-scope div.main_container:nth-child(1) ui-view.ng-scope grow.ng-scope.ng-isolate-scope div.module-container:nth-child(2) div.submodule-container div.grow-ui-view-container.ng-scope veg.ng-scope.ng-isolate-scope div.row.submodule-child-container div.submodule-child-container.col-lg-12.col-md-12.col-sm-12.col-xs-12 div.ng-scope manage-groups.ng-scope.ng-isolate-scope div.manage-groups-container-row div.manage-groups-container div.row.manage-groups-components-row.equal-height-div div.manage-groups-area-and-group-selectors-container.col-sm-3.col-xs-4 div.manage-groups-select-grow-area-row:nth-child(3) common-dropdown:nth-child(1) > kendo-dropdownlist.common-dropdown.k-widget.k-dropdown.k-header.ng-pristine.ng-valid.ng-touched').next().find('span')
    }

}