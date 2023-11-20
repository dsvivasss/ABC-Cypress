const selFirstProject = '/html/body/div[2]/div[2]/div[2]/div[1]/div/div[2]/span[2]/button'
const selFirstCandidate = '/html/body/div[2]/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[3]/button'
const selButtonSelect = '/html/body/div[2]/div[2]/div[2]/div/div[1]/button'
const selTableSelectedCandidate = '/html/body/div[2]/div[2]/div/div/div[1]/div[3]/table'
const selCreateProject = '/html/body/div[2]/div[2]/div[1]/div[2]/span/button'
const selProjectTitleInput = '//*[@id="project_title"]'
const selProjectDescriptionInput = '//*[@id="description"]'
const selButtonCreateProject = '/html/body/div[2]/div[2]/div[2]/div/div/div/form/div[6]/button'
const selButtonCreateInterview = '/html/body/div[2]/div[2]/div[2]/div/div[3]/div/span/button'
const selButtonConfirmInterview = '/html/body/div[2]/div[2]/div[2]/div/div/div/form/div[2]/button'
const selTableInterviews = '/html/body/div[2]/div[2]/div[2]/div/div[3]/table'
const selButtonCreateNewTest = '/html/body/div[2]/div[2]/div/div/div[3]/span/button'
const selTestTitleInput = '//*[@id="test_title"]'
const selButtonConfirmTest = '/html/body/div[2]/div[2]/div[2]/div[1]/div/div/form/div[5]/button'
const selButtonAssign = '/html/body/div[2]/div[2]/div/div/div[1]/div[3]/table/tbody/tr[1]/td[3]/button'
const selTableAssignedCandidate = '/html/body/div[2]/div[2]/div/div/div[1]/div[2]/table'

export function clickFirstProject() {
    cy.xpath(selFirstProject).click();
}

export function clickFirstCandidate() {
    cy.xpath(selFirstCandidate).click();
}

export function clickButtonSelect() {
    cy.xpath(selButtonSelect).click();
}

export function lengthSelectedCandidate() {
    // Length should be higher than 0
    cy.xpath(selTableSelectedCandidate).find('tr').should('have.length.gt', 0)
}

export function clickCreateProject() {
    cy.xpath(selCreateProject).click();
}

export function inputProjectTitle(title) {
    cy.xpath(selProjectTitleInput).type(title);
}

export function inputProjectDescription(description) {
    cy.xpath(selProjectDescriptionInput).type(description);
}

export function clickButtonCreateProject() {
    cy.xpath(selButtonCreateProject).click();
}

export function clickButtonCreateInterview() {
    cy.xpath(selButtonCreateInterview).click();
}

export function clickButtonConfirmInterview() {
    cy.xpath(selButtonConfirmInterview).click();
}

export function lengthInterviews() {
    // Length should be higher than 0
    cy.xpath(selTableInterviews).find('tr').should('have.length.gt', 0)
}

export function clickButtonCreateNewTest() {
    cy.xpath(selButtonCreateNewTest).click();
}

export function inputTestTitle(title) {
    cy.xpath(selTestTitleInput).type(title);
}

export function clickButtonConfirmTest() {
    cy.xpath(selButtonConfirmTest).click();
}

export function clickButtonAssign() {
    cy.xpath(selButtonAssign).click();
}

export function lengthAssignedCandidate() {
    // Length should be higher than 0
    cy.xpath(selTableAssignedCandidate).find('tr').should('have.length.gt', 0)
}