describe ('Test App', () => {

    it ('launches', () => {
        cy.visit ('/');
    });

    it ('open Review Page', () => {
        cy.visit ('/review');
        cy.get('[data-cy=reviewTitle]').should('contain', 'Preview Workout');
    });
    it('press the back button in Review Page', () => {
        cy.visit ('/review');
        cy.get('[data-cy=backButton]').click();
        cy.visit ('/start');
        cy.get('[data-cy=welcome]').should('contain', 'Welcome back')
    });
});