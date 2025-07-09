import { restaurantsElements } from '../elements/10-restaurantsElements';

export class RestaurantsPage {
  clickRestaurantsButton() {
    cy.get(restaurantsElements.restaurantsButton).click();
  }

  getTable() {
    return cy.get(restaurantsElements.table);
  }

  getTableRows() {
    return cy.get(restaurantsElements.tableRow);
  }

  getTableHeaders() {
    return cy.get(restaurantsElements.tableHeader);
  }

  getEditButton(row) {
    return cy.wrap(row).find(restaurantsElements.editButton);
  }

  getDeleteButton(row) {
    return cy.wrap(row).find(restaurantsElements.deleteButton);
  }
}
