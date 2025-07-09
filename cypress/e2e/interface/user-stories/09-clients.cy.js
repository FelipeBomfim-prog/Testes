import { LoginPage } from '../pageobjects/08-loginAdminPage';
import { ClientsPage } from '../pageobjects/09-clientsPage';

describe('09 - Admin - Manage Clients', () => {
  const loginPage = new LoginPage();
  const clientsPage = new ClientsPage();

  beforeEach(() => {
    cy.visit('/');
    loginPage.login('admin', 'admin123');
    cy.url().should('include', '/administrator');
    clientsPage.clickClientsButton();
  });

  it('Should display the clients table', () => {
    clientsPage.getTable().should('exist');
  });

  it('Should display the correct column headers', () => {
    const expectedHeaders = ['ID', 'Username', 'Email', 'Ações'];
    clientsPage.getTableHeaders().each(($header, index) => {
      cy.wrap($header).should('contain.text', expectedHeaders[index]);
    });
  });

  it('Should display rows with data and action buttons', () => {
    clientsPage.getTableRows().each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('td').should('have.length.at.least', 4);
        clientsPage.getEditButton($row).should('exist');
        clientsPage.getDeleteButton($row).should('exist');
      });
    });
  });

  it('Should display the Add client button', () => {
    clientsPage.getAddClientButton().should('exist').and('contain.text', 'Adicionar cliente');
  });

  it('Add client button should redirect', () => {
    clientsPage.getAddClientButton().click();
    cy.url().should('include', '/administrator/client');
  });
});
