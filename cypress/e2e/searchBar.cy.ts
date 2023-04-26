/// <reference types="cypress" />
describe('searchBar', () => {
  beforeEach(() => cy.visit('/'));
  it('works and render card correctly', () => {
    const searchString = 'agency director';
    cy.get('.search__input').type(searchString);
    cy.get('.search__input').should('have.value', searchString);
    cy.get('.search__btn').click();
    cy.intercept('GET', `https://rickandmortyapi.com/api/character/?name=${searchString}`, {
      statusCode: 200,
      body: { success: true },
    }).as('getRequest');
    cy.get('.card').should('have.length', 1);
  });
  it('works and render no data', () => {
    const searchString = '12234421512';
    cy.get('.search__input').type(searchString);
    cy.get('.search__input').should('have.value', searchString);
    cy.get('.search__btn').click();
    cy.intercept('GET', `https://rickandmortyapi.com/api/character/?name=${searchString}`, {
      statusCode: 200,
      body: { success: true },
    }).as('getRequest');
    cy.get('.home__cards').contains('Error: We have nothing there');
  });
});
