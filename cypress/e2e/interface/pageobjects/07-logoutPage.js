import { logoutElements } from '../elements/07-logoutElements';

class LogoutPage {
  clickLogout() {
    cy.get(logoutElements.logoutButton).click();
  }

  verifyRedirectToLogin() {
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  }

  verifyLocalStorageCleared() {
    cy.window().its('localStorage.USER').should('be.null');
  }

  navigateTo(pageName) {
    cy.contains(pageName).click();
    cy.wait(500);
  }
}

export default new LogoutPage();
