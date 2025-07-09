import { LoginPage } from '../pageobjects/08-loginAdminPage';

describe('08 - Admin - Login', () => {
  const loginPage = new LoginPage();

  it('Should allow the user to log in with valid credentials', () => {
    loginPage.visit();

    loginPage.login('admin', 'admin123');

    cy.url().should('include', '/administrator');
  });
});
