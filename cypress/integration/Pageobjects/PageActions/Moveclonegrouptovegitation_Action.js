///<reference types="Cypress" />

import Moveclonetovegitationelements from '../PageElements/Moveclonetovegitationelements'
import GrowCreateplantActions from '../PageActions/GrowCreateplantActions'
import PSTTime from '../PageActions/PSTTime'

export default class Moveclonegrouptovegitation_Action 


{
 
constructor()
{

globalThis.movetoveg = new Moveclonetovegitationelements()
globalThis.growcreateplant = new GrowCreateplantActions()
}

Clonetovegmove()
{
   
    element1.Grow_CloneModule().click()
    movetoveg.Grow_cloning_groups().should('be.visible').click()   
    movetoveg.Grow_Searchgroup_Dropdown().should('be.visible').click({force:true})
    movetoveg.Grow_Searchgroup_Dropdown().type(clonegroup) 
    movetoveg.Grow_Searchgroup_Dropdown().type('{downarrow}') 
    movetoveg.Grow_Searchgroup_Dropdown().type('{enter}') 
    movetoveg.Grow_Select_Clone_Group().click()
    movetoveg.Grow_gettotalplant().contains('1').then((text)=>
{
  
 
    cy.log('plant is matched')
    movetoveg.Grow_Action_Button().invoke('show').click()
    movetoveg.Grow_Move_Group().should('be.visible').click()
 

})
    
    movetoveg.Grow_survialrate_load().should('be.visible').then((label) =>
{
            label.text();
            

})
const Time = new PSTTime()
 



const PSTDateandtime =  Time.PSTTime(null,'M/D/YYYY  h:mm A','America/Los_Angeles')


    
    //movetoveg.Grow_Create_DateandTime().should('be.visible').click({force:true})
    
    movetoveg.Grow_Select_Areatype().should('be.visible').click()
    movetoveg.Grow_Select_Areatype().type('vegitative')
    movetoveg.Grow_Select_Areatype().type('{enter}') 
    movetoveg.Grow_Select_Destination_Area().should('be.visible').click()
   
    movetoveg.Grow_Select_Destination_Area().type('AutoTestVeg').type('{enter}') 
    movetoveg.Grow_Enter_DateandTime().should('be.visible').clear()
    movetoveg.Grow_Enter_DateandTime().should('be.visible').focus().click()
    movetoveg.Grow_Enter_DateandTime().should('be.visible').type(PSTDateandtime)
    
    movetoveg.Grow_Select_Tag().click()
    movetoveg.Grow_Create_DateandTime().should('be.visible').click({force:true})
    movetoveg.Grow_Confirm_Move_Button().should('be.visible').click({force:true})
}

}