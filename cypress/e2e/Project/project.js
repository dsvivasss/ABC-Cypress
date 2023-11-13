import {
    Then,
    Given,
    When,
    After
} from "cypress-cucumber-preprocessor/steps";

import * as fn from "../pageObject"

Given('I login succesfully', () => {
    fn.prepare()
})

Given('I go to dashboard', () => {
    // Timeout for the page to load
    cy.wait(5000);
    cy.visit(Cypress.env("projects_url"));
})

Given('I should see {string}', (title) => {
    // Content includes title
    cy.contains(title).should('be.visible')
})

When('I click on first project', () => {
    fn.clickFirstProject()
})

When('I click on first candidate', () => {
    fn.clickFirstCandidate()
})

When('I click on select', () => {
    fn.clickButtonSelect()
})

When('I click on create project', () => {
    fn.clickCreateProject()
})

When('I fill project name with {string}', (title) => {
    fn.inputProjectTitle(title)
})

When('I fill project description with {string}', (description) => {
    fn.inputProjectDescription(description)
})

When('I click on create project button', () => {
    fn.clickButtonCreateProject()
})

Then('I should see selected candidates', () => {
    fn.lengthSelectedCandidate()
})