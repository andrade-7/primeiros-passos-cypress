describe('Orange HMR Tests', () => {

  const selectList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module',
    wrongCredencialAlrt: "[role='alert']"
  }



  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectList.usernameField).type('Admin')
    cy.get(selectList.passwordField).type('admin123')
    cy.get(selectList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectList.sectionTitleTopBar).contains('Dashboard')
  })
it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectList.usernameField).type('Test')
    cy.get(selectList.passwordField).type('Test')
    cy.get(selectList.loginButton).click()
    cy.get(selectList.wrongCredencialAlrt)
  })
})