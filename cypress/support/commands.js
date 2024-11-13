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

Cypress.Commands.add('validateHomeSession', () => { 
    cy.request({
        method: 'GET',
        url: 'https://apex.oracle.com/pls/apex/wwv_flow.ajax?p_context=qa-application/home/*',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
})});

Cypress.Commands.add('chartIframe', () => {
    cy.iframe('[path="M1221,270H1231V280H1221Z"]')
      .as('iframe')
      .find('[aria-label="Series: Deli; Group: Grapes; Value: 50. Unselected"]')
      console.log('Chart iframe found')
  })