/// <reference types="cypress" />

describe('Fluxo de Busca de Produtos', () => {

  beforeEach(() => {
    // Antes de cada teste, o Cypress visitará a página inicial.
    // Isso garante que cada teste comece do mesmo ponto.
    cy.visit('https://www.magazineluiza.com.br/');
  });

  it('Deve realizar uma busca por um produto e ser redirecionado para a página de resultados', () => {
    // Define o nome do produto que vamos buscar.
    const nomeDoProduto = 'iPhone 15';

    // 1. AÇÃO: Encontrar o campo de busca, digitar o nome do produto e pressionar Enter.
    // O seletor '[data-testid="input-search"]' é um identificador único para o campo de busca.
    // O {enter} no final simula o usuário pressionando a tecla Enter.
    cy.get('[data-testid="input-search"]').type(`${nomeDoProduto}{enter}`);

    // 2. VERIFICAÇÃO: Checar se a URL mudou para a página de busca correta.
    // A URL da Magalu para busca tem o formato /busca/nome-do-produto/
    cy.url().should('include', `/busca/${nomeDoProduto}/`);

    // 3. VERIFICAÇÃO EXTRA: Checar se o título principal da página contém o nome do produto buscado.
    // Isso confirma que estamos na página de resultados correta.
    cy.get('[data-testid="main-title"]').should('contain.text', nomeDoProduto);
  });

});