/// <reference types= "cypress"/>
import HomeQaAppPage from '../pages/HomeQaAppPage'
const homeQaAppPage = new HomeQaAppPage()

describe('Change quantity of Order 10', {testIsolation: false}, () => {

        before(() => {
             cy.createSession()
        })

        it ('Change and save quantity value of Order 10 row', () => {
            homeQaAppPage.changeOrderQuantity({ timeout: 5000 })
            cy.validateHomeSession({ timeout: 5000 }) //This endpoint provide information for both (table and chart)
            homeQaAppPage.assertOrderQuantity({ timeout: 5000 })
        })
})