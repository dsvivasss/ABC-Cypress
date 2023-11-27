// Test 
const selUser = '#email'
const selPass = '#password'
const selSubmit = '/html/body/main/div[3]/div[2]/form/div[3]/button'
const selSignUpUser = '/html/body/main/div[3]/div[2]/form/div[9]/button'
const selSignInCompany = '/html/body/main/div[3]/div[2]/form/div[3]/button'
const toastContainer = '.Toastify__toast-container' // Toastify__toast-container
const selNameInput = '#name'

// Prepare the Session
export function prepare() {
    cy.visit(Cypress.env("login_url"));
    typeCredentials("company2@correo.com", "nacional");
    clickLog_in();
}

export function prepare_user() {
    cy.visit(Cypress.env("login_url_user"));
    typeCredentials("daniel@correo.com", "nacional");
    clickLog_in();
}

export function typeCredentials(user, pass) {
    cy.get(selUser).type(user);
    cy.get(selPass).type(pass);
}

export function clickLog_in() {
    cy.xpath(selSubmit).click();
}

export function clickUserSignUp() {
    cy.xpath(selSignUpUser).click();
}

export function clickCompanySignIn() {
    cy.xpath(selSignInCompany).click();
}

export function checkValidationFieldMessage(message) {
    cy.get(`${selNameInput}:invalid`)
        .invoke('prop', 'validationMessage')
        .should('equal', message)
}

export function checkToastIsVisible() {
    cy.get(toastContainer).should('be.visible');
}