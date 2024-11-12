/// <reference types= "cypress"/>

describe('Login happy path scenario', {testIsolation: false}, () => {
        it ('Successul login', () => {
            cy.login()
        })
})