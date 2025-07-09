import { HistoricPage } from '../pageobjects/06-historicPage';
import { historicElements } from '../elements/06-historicElements';

describe('06 - Historic Page UI', () => {
  const historicPage = new HistoricPage();

  beforeEach(() => {
    historicPage.visitLogin();
    historicPage.login('vitorreiel', '123456');

    historicPage.goToHistoric();
  });

  it('Should display the main container and historic list', () => {
    historicPage.getMainDiv().should('exist').and('be.visible');
    historicPage.getHistoricList().should('exist').and('be.visible');
  });

  it('Should display the title "Histórico de Pedidos"', () => {
    historicPage.getTitle().should('contain.text', 'Histórico de Pedidos');
  });

  it('Should display historic cards or a message if there are no orders', () => {
    cy.get('body').then(($body) => {
      if ($body.find(historicElements.historicCard).length > 0) {
        historicPage.getHistoricCards().its('length').should('be.gte', 0);
      } else {
        historicPage.getNoOrdersMessage().should('contain.text', 'Você não tem pedidos registrados!');
      }
    });
  });

  it('Each card should contain image, description, products, total, and address', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.historic').length > 0) {
        historicPage.getHistoricCards().each(($card) => {
          historicPage.getPhoto($card).should('exist');
          historicPage.getDescription($card).should('exist');
          historicPage.getProducts($card).should('exist');
          historicPage.getTotal($card).should('exist');
          historicPage.getAddress($card).should('exist');
        });
      } else {
        cy.log('No historic available. Skipping test.');
      }
    });
  });

  it('Card images should have the correct size and rounded borders', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.historic').length > 0) {
        historicPage.getHistoricCards().each(($card) => {
          historicPage.getPhoto($card)
            .should('have.css', 'width', '90px')
            .and('have.css', 'height', '90px')
            .and('have.css', 'border-radius', '7px');
        });
      } else {
        cy.log('No historic available. Skipping image verification.');
      }
    });
  });

  it('Cards should have a hover effect', () => {
    cy.get('body').then(($body) => {
      if ($body.find('.historic').length > 0) {
        cy.get('.historic').first().trigger('mouseover')
          .should('have.css', 'transform')
          .and('not.eq', 'none');
      } else {
        cy.log('No historic available. Skipping hover verification.');
      }
    });
  });

  it('Historic list should be scrollable', () => {
    historicPage.getHistoricList().should('have.css', 'overflow-y', 'scroll');
  });
});
