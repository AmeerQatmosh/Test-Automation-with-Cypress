/// <reference types="cypress" />
context('cypress demo', () =>{
it ('login',()=>{
      cy.visit('https://skillsmatch.mdx.ac.uk')
      cy.get('#username').type('Test Automation')
      cy.get('#password').type('najah285@edu')

      cy.get('.btn').click()
 })
})    