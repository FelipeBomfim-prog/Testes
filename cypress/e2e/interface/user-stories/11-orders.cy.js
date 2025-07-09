import { LoginPage } from '../pageobjects/08-loginAdminPage';
import { OrdersPage } from '../pageobjects/11-ordersPage';

describe('11 - Order List - Admin Profile', () => {
  const loginPage = new LoginPage();
  const ordersPage = new OrdersPage();

  beforeEach(() => {
    cy.visit('/');
    cy.get('input[type="email"]').type('admin');
    cy.get('input[type="password"]').type('admin123');
    cy.get('.button-login').click();
    cy.url().should('include', '/administrator');

    cy.contains('Pedidos').click();
    cy.url().should('include', 'type=pedidos');
  });

  it('Should display the orders table', () => {
    ordersPage.getTable().should('exist');
  });

  it('Should contain rows in the orders table', () => {
    ordersPage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('Each row should display ID, Restaurant, User, Date/Time, and Value', () => {
    ordersPage.getTableRows().first().within(() => {
      cy.get('td').eq(0).should('not.be.empty');
      cy.get('td').eq(1).should('not.be.empty');
      cy.get('td').eq(2).should('not.be.empty');
      cy.get('td').eq(3).should('not.be.empty');
      cy.get('td').eq(4).should('contain.text', 'R$');
    });
  });

  it('Should allow searching orders using the search bar', () => {
    cy.get('.vgt-global-search input').type('1');
    ordersPage.getTableRows().should('exist');
  });

  it('Table should have sorting enabled for ID and Date/Time', () => {
    cy.get('.vgt-table th').eq(0).should('have.class', 'sortable');
    cy.get('.vgt-table th').eq(3).should('have.class', 'sortable');
  });
});
