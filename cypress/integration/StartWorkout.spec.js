beforeEach( () => {
    cy.login(Cypress.env('TEST_UID'));
})


describe('Visit Workout Page', ()=> {
    it('Homepage', () => {
        cy.visit ('/start');
        cy.get('[data-cy=Start]').should('contain', `Begin Workout of the Day`);
    })

    it('Click start button', () => {
        cy.get('[data-cy=Start-Button]').click();
        cy.get('[data-cy=countdown-timer]').should('contain', `Are you ready?!`);
    })

    it('Gif on workout page', () => {
        cy.wait(300)
        cy.get('[data-cy=gif]').should('be.visible');   
    })

    it('Gif on workout page', () => {
        cy.wait(300)
        cy.get('[data-cy=gif]').should('be.visible');   
    })


})