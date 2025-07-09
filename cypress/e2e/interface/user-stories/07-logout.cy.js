import logoutPage from '../pageobjects/07-logoutPage';

describe('07 - Logout Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
    cy.get('input[type="email"]').type('vitorreiel');
    cy.get('input[type="password"]').type('123456');
    cy.contains('Acessar').click({ force: true });
    cy.wait(500);
  });

  it('Should correctly log out from various screens', () => {
    cy.url().should('include', '/home');

    logoutPage.navigateTo('Endereços');
    logoutPage.clickLogout();
    logoutPage.verifyRedirectToLogin();
    logoutPage.verifyLocalStorageCleared();

    cy.get('input[type="email"]').type('vitorreiel');
    cy.get('input[type="password"]').type('123456');
    cy.contains('Acessar').click({ force: true });
    cy.wait(500);

    logoutPage.navigateTo('Histórico');
    logoutPage.clickLogout();
    logoutPage.verifyRedirectToLogin();
    logoutPage.verifyLocalStorageCleared();

    cy.get('input[type="email"]').type('vitorreiel');
    cy.get('input[type="password"]').type('123456');
    cy.contains('Acessar').click({ force: true });
    cy.wait(500);

    logoutPage.clickLogout();
    logoutPage.verifyRedirectToLogin();
    logoutPage.verifyLocalStorageCleared();
  });
});
