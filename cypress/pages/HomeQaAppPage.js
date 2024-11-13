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

    customerCell = () => {
        return 'tbody > .a-GV-row > :nth-child(6)';
    };

    customerButton = () => {
        return '#C86393156845784584040_lov_btn';
    };

    locationList = () => {
        return 'li[data-id="1"]';
    };


    //actions QA application

    setStoreAProductQuantity() {    
        cy.get(this.appleStoreA()).dblclick().type('{backspace}').type('40')
        cy.get(this.bananaStoreA()).click().type('{del}'.repeat(17)).type('50')    
        cy.get(this.buttonSave()).click({ force: true });  
    }

    assertStoreAProductQuantity() {    
        cy.get(this.appleStoreA()).should('contain', '40')
        cy.get(this.bananaStoreA()).should('contain', '50')
    }

    changeOrderQuantity() {
        cy.get(this.orderColumn()).click()
        cy.get('[data-return-value="10"]', { timeout: 3000 }).click()
        cy.get('.a-IG-controls-item > :nth-child(2)').should('be.visible', { timeout: 3000 })
        cy.get(this.quantityCell()).dblclick().type('{backspace}').type('20')
        cy.get(this.buttonSave()).click({ force: true });
    }

    assertOrderQuantity() {    
        cy.get(this.quantityCell()).should('contain', '20')
    }

    changeOrderLocation() {
        cy.get(this.orderColumn()).click()
        cy.get('[data-return-value="10"]', { timeout: 3000 }).click()
        cy.get('.a-IG-controls-item > :nth-child(2)').should('be.visible', { timeout: 3000 })
        cy.get(this.customerCell()).dblclick()
        cy.get(this.customerButton()).click()
        cy.get('li[data-id="1"]').click()
        cy.get(this.buttonSave()).click({ force: true });
    }
    
    assertOrderLocation() {    
        cy.get(this.customerCell()).should('contain', 'Deli')
    }
} 
export default HomeQaAppPage; 