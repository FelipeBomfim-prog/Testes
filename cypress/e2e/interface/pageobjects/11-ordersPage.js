import { ordersElements } from '../elements/11-ordersElements';

export class OrdersPage {
  getTable() {
    return cy.get(ordersElements.table);
  }

  getTableRows() {
    return cy.get(ordersElements.tableRows);
  }

  getTableCells() {
    return cy.get(ordersElements.tableCells);
  }
}
