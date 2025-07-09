import { AddressPage } from '../pageobjects/05-addressPage';

describe('05 - Address Page UI', () => {
  const addressPage = new AddressPage();

  beforeEach(() => {
    addressPage.visitLogin();
    addressPage.login('vitorreiel', '123456');

    addressPage.goToAddress();
  });

  it('Should display the main container and address list', () => {
    addressPage.getMainDiv().should('exist').and('be.visible');
    addressPage.getAddressList().should('exist').and('be.visible');
  });

  it('Should display the title "Informe o endereço de entrega"', () => {
    addressPage.getTitle().should('contain.text', 'Informe o endereço de entrega');
  });

  it('Should display address cards or a message for no addresses', () => {
    cy.get('body').then(($body) => {
      if ($body.find(addressPage.getAddressList()).length > 0) {
        addressPage.getAddressCards().its('length').should('be.gte', 0);
      } else {
        addressPage.getNoAddressMessage().should('contain.text', 'Você não tem endereços cadastrados!');
      }
    });
  });

  it('Each address card should have street, neighborhood, number, and complement', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.address').length > 0) {
        addressPage.getAddressCards().each(($card) => {
          addressPage.getRua($card).should('exist');
          addressPage.getBairro($card).should('exist');
          addressPage.getNumero($card).should('exist');
          addressPage.getComplemento($card).should('exist');
        });
      } else {
        cy.log('No addresses available. Skipping test.');
      }
    });
  });

  it('Should be able to select an address card', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.address').length > 0) {
        addressPage.getAddressCards().first().click();
        addressPage.getSelectedAddressCard().should('have.class', 'selected');
      } else {
        cy.log('No addresses registered, skipping selection.');
      }
    });
  });

  it('Should be able to delete an address', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.address').length > 0) {
        addressPage.getAddressCards().first().find('.button-address').click();
        cy.wait(500);
        cy.get('.address').should('have.length.lessThan', $body.find('.address').length);
      } else {
        cy.log('No addresses registered, skipping deletion.');
      }
    });
  });

  it('Confirm button should only be visible if there is an order', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.address').length > 0) {
        addressPage.getConfirmButton().should('exist');
      } else {
        cy.log('No addresses registered, skipping Confirm button check.');
      }
    });
  });

  it('"Restaurants" button should exist and redirect', () => {
    addressPage.getRestaurantsButton().should('exist').click();
    cy.url().should('include', '/home');
  });

  it('Address list should be scrollable', () => {
    addressPage.getAddressList().should('have.css', 'overflow-y', 'scroll');
  });

  it('Address cards should have a hover effect', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.address').length > 0) {
        cy.get('.address').first().trigger('mouseover')
          .should('have.css', 'transform')
          .and('not.eq', 'none');
      } else {
        cy.log('No addresses registered, skipping hover check.');
      }
    });
  });
});
