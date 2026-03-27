import userData from '../fixtures/userData.json'

describe('Orange HMR Tests', () => {

  const selectList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlrt: "[role='alert']"
  }



  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectList.usernameField).type(userData.userSuccess.username)
    cy.get(selectList.passwordField).type(userData.userSuccess.password)
    cy.get(selectList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectList.dashboardGrid)
  })
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectList.usernameField).type(userData.userFail.username)
    cy.get(selectList.passwordField).type(userData.userFail.password)
    cy.get(selectList.loginButton).click()
    cy.get(selectList.wrongCredencialAlrt)
  })
})

