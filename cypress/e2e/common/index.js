import {
    Then,
    Given,
    When,
    After
} from "cypress-cucumber-preprocessor/steps";

import * as fn from "../pageObject" 

// First Clear the Session For Testing
Cypress.session.clearAllSavedSessions()

// ** AND ** //

And('I wait for {string} seconds', (seconds) => {
    cy.wait(seconds * 1000); // Convert seconds to milliseconds
});