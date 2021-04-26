/* eslint-disable jest/expect-expect */
describe('home page', () => {
  beforeEach(() => {
    // cy.intercept('http://localhost:3001/api/books',
    //   {
    //     statusCode: 200,
    //     body: [
    //       { title: 'Wuthering Heights' },
    //       { title: 'Great Gatsby' },
    //       { title: 'East of Eden' },
    //       { title: 'The Count of Monte Cristo' },
    //       { title: 'Hyperion' },
    //       { title: 'The Gunslinger' },
    //       { title: 'Beowulf' },
    //       { title: 'Unofficial Pokedex Guide Sixth Edition' },
    //       { title: 'Lord of the Rings' },
    //       { title: 'Eat Pray Love' },
    //     ],
    //   });

    cy.visit('/');
  });

  it('should have a header that says SDI Library', () => {
    cy.findByRole('heading').contains(/SDI Library/).should('exist');
  });

  it('should render a list of books on the home page', () => {
    cy.findByRole('list').should('exist');
    cy.findAllByRole('listitem').should('have.length', 10);
  });
});
