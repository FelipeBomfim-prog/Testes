import { HeaderPage } from '../pageobjects/01-headerPage';

describe('01 - Header UI', () => {
  const headerPage = new HeaderPage();

  beforeEach(() => {
    headerPage.visit();
  });

  it('Should display the header', () => {
    headerPage.getHeader().should('be.visible');
  });

  it('Should contain the navigation bar', () => {
    headerPage.getNav().should('exist').and('be.visible');
  });

  it('Should contain navigation list items', () => {
    headerPage.getNavItems().its('length').should('be.gte', 1);
  });

  it('Should contain secondary navigation buttons', () => {
    headerPage.getSecondaryButtons().its('length').should('be.gte', 1);
  });

  it('Should contain at least one primary action button', () => {
    headerPage.getPrimaryButton().should('exist');
  });
});
