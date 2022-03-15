beforeEach( () => {
    cy.login(Cypress.env('TEST_UID'));
})

describe('Pause Exercise Test', () =>
{
    it('Click start button', () => {
        cy.visit ('/start');
        cy.get('[data-cy=Start-Button]').click();
        cy.wait(300) 
    })

    it('Click pause button', () => {
        cy.get('[data-cy=pause]').click()
        cy.get('[data-cy=play]').should('be.visible')
    })
})