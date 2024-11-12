/// <reference types= "cypress"/>
import HomeQaAppPage from '../pages/HomeQaAppPage'
const homeQaAppPage = new HomeQaAppPage()

describe('Change the location of Order 10', {testIsolation: false}, () => {

        before(() => {
             cy.createSession()
        })

        it ('Change and save the location of Order 10', () => {
            homeQaAppPage.changeOrderLocation()
        })
})