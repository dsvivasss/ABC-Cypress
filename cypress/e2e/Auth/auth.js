import {
    Then,
    Given,
    When,
    After
} from "cypress-cucumber-preprocessor/steps";

import * as fn from "../pageObject"

Given('I visit the signup page', () => {
    cy.visit(Cypress.env("qa_url"));
})

Given('I visit the login company page', () => {
    cy.visit(Cypress.env("login_url"));
})

Given('I fill in company credentials with {string} and {string}', (email, password) => {
    fn.typeCredentials(email, password)
})

When('I click on sign in as a user', () => {
    fn.clickUserSignUp()
})

When('I click on log in as a company', () => {
    fn.clickCompanySignIn()
})

Then('I should see a message in my field saying {string}', (message) => {
    fn.checkValidationFieldMessage(message)
})

Then('I should see a toast message', () => {
    fn.checkToastIsVisible()
})

Then('I should see {string}', (title) => {
    cy.contains(title).should('be.visible')
})