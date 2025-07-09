describe('12 - Exploratory flow', () => {
  context('Normal user', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('input[type="email"]').type('vitorreiel');
      cy.get('input[type="password"]').type('123456');
      cy.get('.button-login').click({ force: true });
      cy.url().should('include', '/home');
    });

    it('Should access the Home page and validate the restaurant list', () => {
      cy.contains('Selecione o restaurante').should('be.visible');
      cy.get('.locations-list').should('exist');
    });

    it('Should access the Addresses page', () => {
      cy.contains('Endereços').click();
      cy.url().should('include', '/address');
      cy.contains('Informe o endereço de entrega').should('be.visible');
    });

    it('Should access the History page', () => {
      cy.contains('Histórico').click();
      cy.url().should('include', '/historico');
      cy.contains('Histórico de Pedidos').should('be.visible');
    });

    it('Should navigate between screens and validate logout buttons', () => {
      cy.contains('Endereços').click();
      cy.url().should('include', '/address');
      cy.contains('Restaurantes').click();
      cy.url().should('include', '/home');
      cy.contains('Histórico').click();
      cy.url().should('include', '/historico');
      cy.contains('Sair').click();
      cy.url().should('include', '/');
      cy.window().then((win) => {
        const user = win.localStorage.getItem('USER');
        expect(user).to.be.null;
      });
    });
  });

  context('Admin', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('input[type="email"]').type('admin');
      cy.get('input[type="password"]').type('admin123');
      cy.get('.button-login').click({ force: true });
      cy.url().should('include', '/administrator');
    });

    it('Should access the admin Home page', () => {
      cy.contains('Selecione alguma opção').should('be.visible');
    });

    it('Should access the Clients list', () => {
      cy.contains('Clientes').click();
      cy.url().should('include', '/administrator?type=clientes');
      cy.get('.vgt-table').should('exist');
      cy.get('.vgt-table tbody tr').should('have.length.greaterThan', 0);
    });

    it('Should access the Restaurants list', () => {
      cy.contains('Restaurantes').click();
      cy.url().should('include', '/administrator?type=restaurantes');
      cy.get('.vgt-table').should('exist');
    });

    it('Should access the Orders list', () => {
      cy.contains('Pedidos').click();
      cy.url().should('include', '/administrator?type=pedidos');
      cy.get('.vgt-table').should('exist');
    });

    it('Should log out after navigating through the screens', () => {
      cy.contains('Clientes').click();
      cy.url().should('include', '/administrator?type=clientes');
      cy.contains('Restaurantes').click();
      cy.url().should('include', '/administrator?type=restaurantes');
      cy.contains('Pedidos').click();
      cy.url().should('include', '/administrator?type=pedidos');
      cy.contains('Sair').click();
      cy.url().should('include', '/');
      cy.window().then((win) => {
        const user = win.localStorage.getItem('USER');
        expect(user).to.be.null;
      });
    });
  });
});
