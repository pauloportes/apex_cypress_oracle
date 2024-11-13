/// <reference types= "cypress"/>
import HomeQaAppPage from '../pages/HomeQaAppPage'
const homeQaAppPage = new HomeQaAppPage()

describe('Save values in chart in memory', {testIsolation: false}, () => {

        before(() => {
             cy.createSession()
        })

        it ('Change and save products values of "Store A" products in the chart and check if it was saved', () => {
            homeQaAppPage.setStoreAProductQuantity({ timeout: 5000 })
            cy.validateHomeSession({ timeout: 5000 })
            homeQaAppPage.assertStoreAProductQuantity({ timeout: 5000 })
        })
})