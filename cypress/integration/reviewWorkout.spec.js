beforeEach( () => {
  cy.login(Cypress.env('TEST_UID'));
})

describe('Visit Preview Page', ()=> {
  it('Check Preview Contents', () => {
      cy.visit ('/review/');
      cy.get('[data-cy=Preview]').should('contain', `Preview Workout`);
      cy.wait(3000);
      cy.get('[data-cy=Cards]').children().should('have.length', 5)
  })

  it('Start Workout', () => {
      cy.visit ('/review/');
      cy.get('[data-cy=Start]').click();
      cy.get('[data-cy=WODC]').should('contain', "WODC");
  })

  it('Go Back', () => {
    cy.visit ('/review/');
    cy.get('[data-cy=Back]').click();
    cy.get('[data-cy=wodc-start]').should('contain', "Workout Of The Day Challenge (WODC)");
})
})