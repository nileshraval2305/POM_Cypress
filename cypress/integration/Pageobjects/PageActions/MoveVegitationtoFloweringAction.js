///<reference types="Cypress" />

import Moveclonetovegitationelements from '../PageElements/Moveclonetovegitationelements'
import GrowCreateplantActions from './GrowCreateplantActions'
import MoveVegitationtoFloweringelements from '../PageElements/MoveVegitationtoFloweringelements'

export default class MoveVegitationtoFloweringAction


{
 
constructor()
{
globalThis.movevegtoflower = new MoveVegitationtoFloweringelements()
globalThis.movetoveg = new Moveclonetovegitationelements()
globalThis.growcreateplant = new GrowCreateplantActions()
}

MoveveggrouptoFlowering()
{
   
    movevegtoflower.Grow_Vegitation_Module().scrollIntoView().should('be.visible').then(($Element)=>
    {
        $Element.click()
 
    })
    movevegtoflower.Grow_Veggroups_Option().scrollIntoView().should('be.visible').then(($Element)=>
    {
        $Element.click()
 
    })
    
    //movevegtoflower.Grow_Veggroups_Option().trigger('click').click()
    
   
    
}

}