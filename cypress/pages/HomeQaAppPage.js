class HomeQaAppPage {
    
    //elements QA application

    appleStoreA = () => {
        return ".a-GV-row.is-selected > .u-tE";
    };

    bananaStoreA = () => {
        return '[data-id="2"] > .u-tE';
    };

    buttonSave = () => {
        return '#B86393157361126584045';
    };

    orderColumn = () => {
        return '#C86393157098168584043_HDR';    
    };

    quantityCell = () => {
        return 'td[role="gridcell"].a-GV-cell.u-tE';
    };

    //actions QA application

    setStoreAProductQuantity() {    
        cy.get(this.appleStoreA()).dblclick().type('{backspace}').type('40')
        cy.get(this.bananaStoreA()).click().type('{del}'.repeat(17)).type('50')    
        cy.get(this.buttonSave()).click({ force: true });  
     }

     changeOrderQuantity() {
        cy.get(this.orderColumn()).click()
        cy.get('[data-return-value="10"]', { timeout: 3000 }).click()
        cy.get('.a-IG-controls-item > :nth-child(2)').should('be.visible', { timeout: 3000 })
        cy.get(this.quantityCell()).dblclick().type('{backspace}').type('20')
        cy.get(this.buttonSave()).click({ force: true });
    }
} 
export default HomeQaAppPage; 