///<reference types="Cypress" />

import CreatePlantElements from '../PageElements/CreatePlantElements'

export default class GrowCreateplantActions


{
  
constructor()
{
  
globalThis.element1 = new CreatePlantElements()
globalThis.now = new Date()
globalThis.clonegroup = 'Automation'+now.getTime()

}
  
CreatePlant_FromClone()
{
   
    element1.Grow_CloneModule().click()
    element1.Grow_Create_Plant().click()
    element1.Grow_SelectRoom().type('Auto Clone').type('{enter}')
  
    element1.Grow_Select_Strain_dropdown().type("ASDA")
  
    element1.Grow_Select_Strain_dropdown().type('{downarrow}')
    element1.Grow_Select_Strain_dropdown().type('{enter}')
   
    element1.Grow_Select_Cloninggroup().type('Auto Cloning')
   
    element1.Grow_Select_Cloninggroup().type('{enter}')
    element1.Grow_Enter_totalplants().type('1')
    element1.Grow_Enter_totalplants().focus().tab()
    element1.Grow_EnterPlant_Group_Name().focus().should('be.enabled').click()
     
     element1.Grow_EnterPlant_Group_Name().focus().should('be.enabled').type(clonegroup).click()
     element1.Grow_Groupname_Is_Visiable().should('be.visible')
     
     
     element1.Grow_Generate_NewPlantid().invoke('show').click()
     
     element1.Grow_Create_Clones().click()
     
     element1.Grow_Get_Plantid_Creation_Msg().should(($div) => {
        const text = $div.text()
       
        expect(text).to.include('New Plant IDs have been created!')
      
      })

}

}
