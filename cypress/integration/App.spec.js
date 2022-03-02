describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens Welcome to Fountain', () => {
    cy.visit ('/');
    cy.get('[data-cy=Login]').should('contain', 'Welcome to Fountain');
  });
  it('press the login button', () => {
    cy.visit ('/');
    cy.get('[data-cy=button]').click();
  });
});