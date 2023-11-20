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

When('I click on create interview', () => {
    fn.clickButtonCreateInterview()
})

When('I click on confirm interview', () => {
    cy.wait(5000);
    fn.clickButtonConfirmInterview()
})

When('I click on create test', () => {
    fn.clickButtonCreateNewTest()
})

When('I fill test name with {string}', (title) => {
    fn.inputTestTitle(title)
})

When('I click on confirm test', () => {
    fn.clickButtonConfirmTest()
})

When('I click on assing candidate', () => {
    cy.wait(5000);
    fn.clickButtonAssign()
})

Then('I should see selected candidates', () => {
    fn.lengthSelectedCandidate()
})

Then('I should see assigned candidates', () => {
    cy.wait(5000);
    fn.lengthAssignedCandidate()
})

Then('I should see interviews', () => {
    fn.lengthInterviews()
})

Then('I should see a toast message', () => {
    fn.checkToastIsVisible()
})