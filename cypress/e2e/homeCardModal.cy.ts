/// <reference types="cypress" />
describe('Card Modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.card').first().click();
  });

  it('modal open', () => {
    cy.get('.modal').should('be.visible').should('have.class', 'modal open');
  });
  it('modal close by click on cross', () => {
    cy.get('.modal__close').click();
    cy.get('.modal').should('not.be.visible').should('have.class', 'modal');
  });
  it('modal close by click on overlay', () => {
    cy.get('.modal').click('right');
    cy.get('.modal').should('not.be.visible');
  });
});
