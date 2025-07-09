import { addressElements } from '../elements/05-addressElements';

export class AddressPage {
  visitLogin() {
    cy.visit('/');
  }

  login(email, password) {
    cy.wait(500);
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains('Acessar').click();
  }

  goToAddress() {
    cy.wait(500);
    cy.contains('Endereços').click();
  }

  getMainDiv() {
    return cy.get(addressElements.mainDiv);
  }

  getAddressList() {
    return cy.get(addressElements.addressList);
  }

  getTitle() {
    return cy.get(addressElements.title);
  }

  getAddressCards() {
    return cy.get(addressElements.addressCard);
  }

  getSelectedAddressCard() {
    return cy.get(addressElements.selectedAddressCard);
  }

  getDeleteButton(card) {
    return cy.wrap(card).find(addressElements.deleteButton);
  }

  getNoAddressMessage() {
    return cy.get(addressElements.noAddressMessage);
  }

  getConfirmButton() {
    return cy.contains('Confirmar');
  }

  getRestaurantsButton() {
    return cy.contains('Restaurantes');
  }
}
