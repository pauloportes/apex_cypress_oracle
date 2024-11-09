/// <reference types= "cypress"/>
import HomeQaAppPage from '../pages/HomeQaAppPage'
const homeQaAppPage = new HomeQaAppPage()

describe('Save values in chart in memory', {testIsolation: false}, () => {

        before(() => {
             cy.login()
        })

        it ('Change and save products values in "Store A" and check if it was saved', () => {
            homeQaAppPage.setStoreAProductQuantity()
        })
})