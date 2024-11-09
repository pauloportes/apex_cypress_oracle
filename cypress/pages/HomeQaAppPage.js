class HomeQaAppPage {
    
    //elements

    appleStoreA = () => {
        return ".a-GV-row.is-selected > .u-tE";
    };

    bananaStoreA = () => {
        return '[data-id="2"] > .u-tE';
    };
    grapesStoreA = () => {
        return '[data-id="5"] > .u-tE';
    };

    buttonSave = () => {
        return '#B84761757277122758341';
    };

    //actions Globalpay

    setStoreAProductQuantity() {
        cy.get(this.appleStoreA()).dblclick().type('{backspace}').type('40')
        cy.get(this.bananaStoreA()).click().type('{del}'.repeat(17)).type('50')    
        cy.get(this.grapesStoreA()).click().type('{del}'.repeat(17)).type('60').wait(2000)    
        cy.get(this.buttonSave()).click({ force: true });  
     }
} 
export default HomeQaAppPage; 