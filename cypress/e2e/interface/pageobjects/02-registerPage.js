import { registerElements } from '../elements/02-registerElements';

export class RegisterPage {
  visit() {
    cy.visit('/register');
  }

  getMainDiv() {
    return cy.get(registerElements.mainDiv);
  }

  getForm() {
    return cy.get(registerElements.form);
  }

  getTitle() {
    return cy.get(registerElements.title);
  }

  getIcon() {
    return cy.get(registerElements.icon);
  }

  getNameLabel() {
    return cy.get(registerElements.nameLabel);
  }

  getNameInput() {
    return cy.get(registerElements.nameInput);
  }

  getEmailLabel() {
    return cy.get(registerElements.emailLabel);
  }

  getEmailInput() {
    return cy.get(registerElements.emailInput);
  }

  getPasswordLabel() {
    return cy.get(registerElements.passwordLabel);
  }

  getPasswordInput() {
    return cy.get(registerElements.passwordInput);
  }

  getRegisterButton() {
    return cy.get(registerElements.registerButton);
  }
}
