import userData from '../fixtures/userData.json'

describe('Orange HMR Tests', () => {

  const selectList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlrt: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firsNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }



  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectList.usernameField).type(userData.userSuccess.username)
    cy.get(selectList.passwordField).type(userData.userSuccess.password)
    cy.get(selectList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectList.dashboardGrid)
    cy.get(selectList.myInfoButton).click()
    cy.get(selectList.firsNameField).clear().type('FirstNameTest')
    cy.get(selectList.lastNameField).clear().type('LastNameTest')
    cy.get(selectList.genericField).eq(3).clear().type('NickName')
    cy.get(selectList.genericField).eq(4).clear().type('Employee')
    cy.get(selectList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectList.dateCloseButton).click()
    cy.get(selectList.genericField).eq(8).clear().type('ssNumberTest')
    cy.get(selectList.genericField).eq(9).clear().type('sinNumberTest')
    cy.get(selectList.submitButton).eq(0).click()
    



  })
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectList.usernameField).type(userData.userFail.username)
    cy.get(selectList.passwordField).type(userData.userFail.password)
    cy.get(selectList.loginButton).click()
    cy.get(selectList.wrongCredencialAlrt)
  })
})

