import { LoginPage } from '../pageobjects/08-loginAdminPage';
import { RestaurantsPage } from '../pageobjects/10-restaurantsPage';

describe('10 - Admin - Manage Restaurants', () => {
  const loginPage = new LoginPage();
  const restaurantsPage = new RestaurantsPage();

  beforeEach(() => {
    cy.visit('/');
    loginPage.login('admin', 'admin123');
    cy.url().should('include', '/administrator');
    restaurantsPage.clickRestaurantsButton();
  });

  it('Should display the restaurants table', () => {
    restaurantsPage.getTable().should('exist');
  });

  it('Should display the correct column headers', () => {
    const expectedHeaders = ['ID', 'Nome', 'Ações'];
    restaurantsPage.getTableHeaders().each(($header, index) => {
      cy.wrap($header).should('contain.text', expectedHeaders[index]);
    });
  });

  it('Should display rows with data and action buttons', () => {
    restaurantsPage.getTableRows().each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('td').should('have.length.at.least', 3);
        restaurantsPage.getEditButton($row).should('exist');
        restaurantsPage.getDeleteButton($row).should('exist');
      });
    });
  });

  it('Edit button should exist and be clickable', () => {
    restaurantsPage.getTableRows().first().within(() => {
      cy.get('.table-icon-btn.edit').should('be.visible').click({ force: true });
    });
    cy.url().should('include', '/administrator/restaurant?id=');
  });
});
