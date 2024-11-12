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

    //actions QA application

    setStoreAProductQuantity() {    
        cy.get(this.appleStoreA()).dblclick().type('{backspace}').type('40')
        cy.get(this.bananaStoreA()).click().type('{del}'.repeat(17)).type('50')    
        cy.get(this.buttonSave()).click({ force: true });  
     }
} 
export default HomeQaAppPage; 