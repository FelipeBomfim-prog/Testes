import { loginElements } from '../elements/08-loginAdminElements';

export class LoginPage {
  visit() {
    cy.visit('/');
  }

  getEmailInput() {
    return cy.get(loginElements.emailInput);
  }

  getPasswordInput() {
    return cy.get(loginElements.passwordInput);
  }

  getLoginButton() {
    return cy.get(loginElements.loginButton);
  }

  login(email, password) {
    this.getEmailInput().type(email);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}
