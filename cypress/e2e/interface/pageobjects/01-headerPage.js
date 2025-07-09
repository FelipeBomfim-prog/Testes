import { headerElements } from '../elements/01-headerElements';

export class HeaderPage {
  visit() {
    cy.visit('/');
  }

  getHeader() {
    return cy.get(headerElements.header);
  }

  getNav() {
    return cy.get(headerElements.nav);
  }

  getNavItems() {
    return cy.get(headerElements.listItems);
  }

  getSecondaryButtons() {
    return cy.get(headerElements.secondaryButtons);
  }

  getPrimaryButton() {
    return cy.get(headerElements.primaryButton);
  }
}
