///<reference types="cypress" />

Given("I navigate to green cart page url", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
})

When("I type ca in seachbox and click on search button", () => {
    cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('ca')
    cy.get('[class="search-button"]').click()
    cy.wait(2000)
})

And("I select cashwe and add to cart", () => {
    cy.get('[class="products"] > .product').each((el, idx) => {
        //cy.log(el.find('h4').text())
        if (el.find('h4').text().includes('Cashews')) {
            cy.get('[class="product-action"] >button').eq(idx).click()
        }
    })
})

And("I Proceed to checkout", () => {
    cy.get('[class="cart-icon"]').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('table[class="cartTable"] > tbody >tr').each((el, idx) => {
        //cy.log(el.find('td > [class="product-name"]').text())
        expect(el.find('td > [class="product-name"]').text()).includes('Cashews')
    })

    cy.contains('Place Order').click()
    cy.wait(2000)
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').click()
    cy.contains('Proceed').click()
    cy.wait(1000)

})


Then("I validate checkout page", () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})