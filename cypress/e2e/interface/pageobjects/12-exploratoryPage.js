import { exploratoryElements } from '../elements/12-exploratoryElements';

export class ExploratoryPage {
  visit() {
    cy.visit('/');
  }

  login(email, password) {
    cy.get(exploratoryElements.emailInput).type(email);
    cy.get(exploratoryElements.passwordInput).type(password);
    cy.get(exploratoryElements.loginButton).click({ force: true });
    cy.wait(500);
  }

  logout() {
    cy.contains('Sair').click({ force: true });
  }

  goTo(pageName) {
    cy.contains(pageName).click({ force: true });
  }

  verifyUrlIncludes(path) {
    cy.url().should('include', path);
  }

  verifyElementVisible(selector) {
    cy.get(selector).should('exist');
  }
}
