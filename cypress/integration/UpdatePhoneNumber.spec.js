beforeEach( () => {
    cy.login(Cypress.env('TEST_UID'));
})

describe('Visit Profile Page', ()=> {
    it('Profile', () => {
        cy.visit ('/profile/' + Cypress.env('TEST_UID'));
        cy.get('[data-cy=UserName]').should('contain', `Test User`);
    })

    it('Update phone number', () => {
        cy.visit ('/profile/' + Cypress.env('TEST_UID'));
        cy.get('[data-cy=EditButton]').click();
        cy.get('[data-cy=InputNumber]').clear().type("123456");
        cy.get('[data-cy=UpdateButton]').click();
        cy.get('[data-cy=UserNumber]').should('contain', "123456");
    })
})