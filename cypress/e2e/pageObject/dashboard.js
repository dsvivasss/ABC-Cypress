const selFirstProject = '/html/body/div[2]/div[2]/div[2]/div[1]/div/div[2]/span[2]/button'
const selFirstCandidate = '/html/body/div[2]/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[3]/button'
const selButtonSelect = '/html/body/div[2]/div[2]/div[2]/div/div[1]/button'
const selTableSelectedCandidate = '/html/body/div[2]/div[2]/div/div/div[1]/div[2]/table'
const selCreateProject = '/html/body/div[2]/div[2]/div[1]/div[2]/span/button'
const selProjectTitleInput = '//*[@id="project_title"]'
const selProjectDescriptionInput = '//*[@id="description"]'
const selButtonCreateProject = '/html/body/div[2]/div[2]/div[2]/div/div/div/form/div[6]/button'

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