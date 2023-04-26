describe('pages renders', () => {
  const testData = {
    home: 'Home Page',
    about: 'About Page',
    forms: 'Form Page',
    error: '404',
  };

  it('home page renders', () => {
    cy.visit('/');
    cy.get('h1').should('have.class', 'home__title').contains(testData.home);
  });
  it('About page renders', () => {
    cy.visit('/about');
    cy.get('h1').should('have.class', 'about__title').contains(testData.about);
  });
  it('Forms page renders', () => {
    cy.visit('/forms');
    cy.get('h1').should('have.class', 'form-page__title').contains(testData.forms);
  });
  it('Error page renders', () => {
    cy.visit('/failedurl');
    cy.get('h1').should('have.class', 'error__code').contains(testData.error);
  });
});
