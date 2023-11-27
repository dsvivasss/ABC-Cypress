import {
    Then,
    Given,
    When,
    After
} from "cypress-cucumber-preprocessor/steps";

import * as fn from "../pageObject"

Given('I login as a user succesfully', () => {
    fn.prepare_user()
})

Then('I should see {string}', (title) => {
    // Content includes title
    cy.contains(title).should('be.visible')
})

When('I click on first project from user', () => {
    fn.clickFirstProjectUser()
})