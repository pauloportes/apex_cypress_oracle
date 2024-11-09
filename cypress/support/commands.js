const password = Cypress.env('password');
const username_test = Cypress.env('username_test');
const base_url = Cypress.env('base_url');

Cypress.Commands.add('login', () => {  
    cy.session('loginSession', () => {
    cy.visit(base_url)
    cy.get('#P9999_USERNAME').type(username_test, { log: false })
    cy.get('#P9999_PASSWORD').type(password, { log: false })
    cy.get('#B84760588262846632385').click({ force: true })
    })  
});