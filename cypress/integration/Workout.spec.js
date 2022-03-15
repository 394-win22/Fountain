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
        cy.get('[data-cy=wodc]').should('contain', `WODC`);
    })

    it('Gif and message on workout page', () => {
        cy.get('[data-cy=gif]').should('be.visible');;
        cy.get('[data-cy=message]').should('be.visible');
    })


})