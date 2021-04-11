describe('My first cypress test', () => {
    it('should visit a new url when "type" is clicked', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('contains', '/commands/actions')

        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
        
    })
})