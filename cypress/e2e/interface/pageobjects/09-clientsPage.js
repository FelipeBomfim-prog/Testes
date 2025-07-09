import { clientsElements } from '../elements/09-clientsElements';

export class ClientsPage {
  clickClientsButton() {
    cy.get(clientsElements.clientsButton).click();
  }

  getTable() {
    return cy.get(clientsElements.table);
  }

  getTableRows() {
    return cy.get(clientsElements.tableRow);
  }

  getTableHeaders() {
    return cy.get(clientsElements.tableHeader);
  }

  getAddClientButton() {
    return cy.get(clientsElements.addClientButton);
  }

  getEditButton(row) {
    return cy.wrap(row).find(clientsElements.editButton);
  }

  getDeleteButton(row) {
    return cy.wrap(row).find(clientsElements.deleteButton);
  }
}
