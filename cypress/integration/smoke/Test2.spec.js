describe.skip('Automate checkbox',function (){

    it('should able to click checkbox',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //
        // //check multiple checkbox
        //
        // cy.get('input[type="checkbox"]').check('option2','option3')
        //
        // // handle static dropdown
        // cy.get('select').select('option1').should('have.value','option1')

        //handle dynamic dropdown

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item').each(($el, index, $list)=>{
            if($el.text() ==='India'){
                $el.trigger('click')
            }
        })

        //alert text

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })

})