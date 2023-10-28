// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-plugin-tab')


// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')
require('@shelex/cypress-allure-plugin');
import '@shelex/cypress-allure-plugin';
Cypress.Cookies.defaults({
    preserve: 'session_id',
  })

  export function checkIfEleExists(ele){
    return new Promise((resolve,reject)=>{
        /// here if  ele exists or not
        cy.get('body').find( ele ).its('length').then(res=>{
            if(res > 0){
                //// do task that you want to perform
                cy.get(ele).select('100').wait(2000);
                resolve();
            }else{
                reject();
            }
        });
    })
}