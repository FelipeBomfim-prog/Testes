import { LoginPage } from '../pageobjects/04-loginPage';

describe('04 - Client - Login', () => {
  const loginPage = new LoginPage();

  it('Should allow the user to log in with valid credentials', () => {
    loginPage.visit();

    loginPage.login('vitorreiel', '123456');

    cy.url().should('include', '/home');
  });
});
