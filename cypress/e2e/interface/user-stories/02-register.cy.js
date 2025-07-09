import { RegisterPage } from '../pageobjects/02-registerPage';

describe('02 - Register Page UI', () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.visit();
  });

  it('Should display the main container', () => {
    registerPage.getMainDiv().should('exist').and('be.visible');
  });

  it('Should contain the visible form', () => {
    registerPage.getForm().should('exist').and('be.visible');
  });

  it('Should display the correct title', () => {
    registerPage.getTitle().should('have.text', 'Cadastro');
  });

  it('Should contain the login icon', () => {
    registerPage.getIcon().should('exist').and('be.visible');
  });

  it('Should have label and field for name', () => {
    registerPage.getNameLabel().should('contain.text', 'Nome');
    registerPage.getNameInput().should('exist').and('have.attr', 'type', 'text');
  });

  it('Should have label and field for email', () => {
    registerPage.getEmailLabel().should('contain.text', 'E-mail');
    registerPage.getEmailInput().should('exist').and('have.attr', 'type', 'email');
  });

  it('Should have label and field for password', () => {
    registerPage.getPasswordLabel().should('contain.text', 'Senha');
    registerPage.getPasswordInput().should('exist').and('have.attr', 'type', 'password');
  });

  it('All fields should have correct placeholders', () => {
    registerPage.getNameInput().should('have.attr', 'placeholder', 'Digite seu nome');
    registerPage.getEmailInput().should('have.attr', 'placeholder', 'Digite seu e-mail');
    registerPage.getPasswordInput().should('have.attr', 'placeholder', 'Digite sua senha');
  });

  it('Register button should be visible and have correct text', () => {
    registerPage.getRegisterButton().should('exist').and('be.visible').and('contain.text', 'Cadastrar');
  });

  it('Register button should have styling class', () => {
    registerPage.getRegisterButton().should('have.class', 'button-login');
  });

  it('Fields should be highlighted on focus', () => {
    registerPage.getNameInput().focus().should('have.css', 'border').and('match', /2px solid/);
    registerPage.getEmailInput().focus().should('have.css', 'border').and('match', /2px solid/);
    registerPage.getPasswordInput().focus().should('have.css', 'border').and('match', /2px solid/);
  });

  it('Button should have hover effect', () => {
    registerPage.getRegisterButton()
      .trigger('mouseover')
      .should('have.css', 'background-color')
      .and('match', /rgb\(204, 0, 0\)|#cc0000/i);
  });
});
