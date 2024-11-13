/// <reference types= "cypress"/>

describe('Login happy path scenario', {testIsolation: false}, () => {
        it ('Successul login', () => {
            cy.login()
            cy.url({ timeout: 5000 }).should('include', '/home'); //frontend validation
            cy.validateHomeSession({ timeout: 5000 })//backend validation
        })
})