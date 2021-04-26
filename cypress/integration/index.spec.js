/* eslint-disable jest/expect-expect */
describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a header that says SDI Library', () => {
    cy.findByRole('heading').contains(/SDI Library/).should('exist');
  });

  it('should render a list of books on the home page', () => {
    cy.findByRole('list').should('exist');
  });
});
