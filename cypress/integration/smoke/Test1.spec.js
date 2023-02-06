/// <reference types="Cypress"/>
describe('My first Test', function () {

    it.skip('My first Test', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".products").find(".product").should('have.length', "30")
        cy.get('.product-name').eq(1).should('have.text', 'Cauliflower - 1 Kg')

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVal = $el.find('h4.product-name').text()
            if (textVal.includes('Beetroot - 1 Kg')) {
                $el.find('button').trigger('click')
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

})





