import { HomePage } from '../pageobjects/03-homePage';
import { homeElements } from '../elements/03-homeElements';

describe('03 - Home Page UI', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it('Should display the main container', () => {
    homePage.getMainDiv().should('exist').and('be.visible');
  });

  it('Should contain the restaurant list', () => {
    homePage.getLocationsList().should('exist').and('be.visible');
  });

  it('Should display the title "Selecione o restaurante"', () => {
    homePage.getTitle().should('contain.text', 'Selecione o restaurante');
  });

  it('Should contain the list or no cards (should not fail)', () => {
    cy.get(homeElements.locationsList).then(($list) => {
      if ($list.find(homeElements.locationCard).length > 0) {
        homePage.getLocationCards().its('length').should('be.gte', 1);
      } else {
        // No restaurants – just ensure the list exists
        homePage.getLocationsList().should('exist');
      }
    });
  });

  it('Each card should have an image, name, address, and phone if present', () => {
    homePage.getLocationCards().each(($el) => {
      cy.wrap($el).find(homeElements.locationImage).should('exist');
      cy.wrap($el).find(homeElements.locationName).should('exist');
      cy.wrap($el).find(homeElements.locationAddress).should('exist');
      cy.wrap($el).find(homeElements.locationPhone).should('exist');
    });
  });

  it('Each card should have a clickable link', () => {
    homePage.getLocationCards().each(($el) => {
      cy.wrap($el).find(homeElements.locationLink).should('have.attr', 'href');
    });
  });

  it('The restaurant list should be scrollable', () => {
    homePage.getLocationsList().should('have.css', 'overflow-y', 'scroll');
  });

  it('Images should have size and rounded borders', () => {
    homePage.getLocationImages().each(($el) => {
      cy.wrap($el).should('have.css', 'width', '90px');
      cy.wrap($el).should('have.css', 'height', '90px');
      cy.wrap($el).should('have.css', 'border-radius', '7px');
    });
  });

  it('Names and addresses should exist', () => {
    homePage.getLocationNames().each(($el) => {
      cy.wrap($el).should('exist');
    });
    homePage.getLocationAddresses().each(($el) => {
      cy.wrap($el).should('exist');
    });
  });
});
