beforeEach( () => {
    cy.login(Cypress.env('TEST_UID'));
})

describe('Visit Profile Page and Show User Name and Email', ()=> {
    it('Profile user name', () => {
        cy.visit ('/profile/' + Cypress.env('TEST_UID'));
        cy.get('[data-cy=UserName]').should('contain', `Test User`);
    })

    it('Profile user email', () => {
        cy.visit ('/profile/' + Cypress.env('TEST_UID'));
        cy.get('[data-cy=UserEmail]').should('contain', `testuser@gmail.com`);
    })
})
