/// <reference types ="cypress" />

Given("i visit gk web page", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})
When("i type {word} in search box", (search) => {
    cy.get('input[placeholder="Search for Vegetables and Fruits"]').type(search)
    cy.get('[class="search-button"]').click()
    cy.wait(2000)
})
And("i add {word} in cart", (prod) => {
    // cy.log(prod) //Capsicum,Carrot
    let products = prod.split(",") //[Capsicum, Carrot]
    //cy.log(products) 
    products.forEach((el, idx) => {
        cy.get('.products >.product').contains(el).parent().contains('ADD TO CART').click()
    });


})
Then("i check out", () => {
    cy.get('[class="cart-icon"]').click()
    cy.contains('PROCEED TO CHECKOUT').click()

})
And("i verify {word} and place order", (prod) => {
    let verifyProd = prod.split(",") //[Capsicum, Carrot]
    let tableVal = []
    cy.get('table[class="cartTable"] > tbody >tr').each((el, idx) => {
        //cy.log(el.find('td > [class="product-name"]').text())
        let pname = el.find('td > [class="product-name"]').text()
        let pArr = pname.split("-") //["Carrot "," 1 Kg"]
        tableVal.push(pArr[0].trim())
    }).then(() => {
        expect(tableVal).to.have.members(verifyProd)
    })

    cy.contains('Place Order').click()
    cy.wait(2000)
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').click()
    cy.contains('Proceed').click()
    cy.wait(1000)

})
Then("i validate order placed", () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})