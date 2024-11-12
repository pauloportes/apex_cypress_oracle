const password = Cypress.env('password');
const username_test = Cypress.env('username_test');
const login_url = Cypress.env('login_url');
const home_url = Cypress.env('home_url');

Cypress.Commands.add('login', () => {  
    cy.session('loginFeature', () => {
    cy.visit(login_url)
    cy.get('#P9999_USERNAME').type(username_test, { log: false })
    cy.get('#P9999_PASSWORD').type(password, { log: false })
    cy.get('#B86391988346850458089').click({ force: true })
    }
)});

Cypress.Commands.add('createSession', () => {  
    cy.session('home_session', () => {
    cy.visit(home_url)
    }
)});