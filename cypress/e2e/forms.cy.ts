/// <reference types="cypress" />
describe('Card Modal', () => {
  const testData = {
    title: 'Form page',
    name: 'Viktor',
    gender: 'Male',
    status: 'Alive',
    species: 'Human',
    date: '2023-03-25',
    empty: 'No data',
  };
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('check form behaviour', () => {
    cy.get('.form-page__cards').contains(testData.empty);
    cy.get('[type="text"]').should('have.attr', 'type', 'text').type(testData.name);
    cy.get('[type="radio"]').check(testData.gender);
    cy.get('select[name="species"]')
      .should('have.attr', 'name', 'species')
      .select(testData.species)
      .should('have.value', testData.species);
    cy.get('select[name="status"]')
      .should('have.attr', 'name', 'status')
      .select(testData.status)
      .should('have.value', testData.status);
    cy.get('[type="date"]')
      .should('have.attr', 'type', 'date')
      .type('2023-04-27')
      .should('have.value', '2023-04-27');
    cy.get('[type="file"]')
      .should('have.attr', 'type', 'file')
      .selectFile('cypress/fixtures/rick-morty-logo.png', { force: true });
    cy.get('[type="checkbox"]').should('have.attr', 'type', 'checkbox').check();
    cy.get('button').click();
    cy.get('.form-card').should('be.visible').should('have.length', 1);
    cy.get('.popup').should('be.visible');
    cy.wait(100);
    cy.get('.popup').should('not.be.visible');
  });
});
