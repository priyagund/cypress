/// <reference types="Cypress"/>
describe('Handling child window',function (){
    it('Should open child window in same tab',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        }

    )
})