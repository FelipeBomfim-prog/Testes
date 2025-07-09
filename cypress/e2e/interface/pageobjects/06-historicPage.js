import { historicElements } from '../elements/06-historicElements';

export class HistoricPage {
  visitLogin() {
    cy.visit('/');
  }

  login(email, password) {
    cy.wait(500);
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains('Acessar').click({force: true});
  }

  goToHistoric() {
    cy.contains('Histórico').click();
  }

  getMainDiv() {
    return cy.get(historicElements.mainDiv);
  }

  getHistoricList() {
    return cy.get(historicElements.historicList);
  }

  getTitle() {
    return cy.get(historicElements.title);
  }

  getHistoricCards() {
    return cy.get(historicElements.historicCard);
  }

  getPhoto(card) {
    return cy.wrap(card).find(historicElements.photoHistoric);
  }

  getDescription(card) {
    return cy.wrap(card).find(historicElements.descriptionHistoric);
  }

  getProducts(card) {
    return cy.wrap(card).find(historicElements.productHistoric);
  }

  getTotal(card) {
    return cy.wrap(card).find(historicElements.productTotal);
  }

  getAddress(card) {
    return cy.wrap(card).find(historicElements.addressHistoric);
  }

  getNoOrdersMessage() {
    return cy.get(historicElements.noOrdersMessage);
  }
}
