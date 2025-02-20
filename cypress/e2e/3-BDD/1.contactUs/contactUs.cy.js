/// <reference types ="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


//Scenario: I want to verify page with valid data
Given("I navigate to web page url", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

})
Given("I navigate to web page url1", () => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

})

When("I enter data for all fields", () => {
    cy.get('[name="first_name"]').type("dipanshu")
    cy.get('[name="last_name"]').type("chawde")
    cy.get('[name="email"]').type("dipanshu@gmail.com")
    cy.get('[name="message"]').type('i am learning BDD')
})

And("I click On submit Button", () => {
    cy.get('[value="SUBMIT"]').click()
})

Then("I verify validation message", () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})


// Scenario: I want to verify page with datatable

When("I enter data foe all fields from datatable", (userData) => {
    userData.hashes().forEach(row => {
        cy.get('[name="first_name"]').type(row.fn)
        cy.get('[name="last_name"]').type(row.ln)
        cy.get('[name="email"]').type(row.email)
        cy.get('[name="message"]').type(row.msg)
    })

})

//Scenario Outline: I want to verify page with multiple user

When("I enter data from datable fn={word} and ln={word} and email={word} and message={word} to fill data", (firstN, lastN, eml, message) => {
    //I enter data from datable <fn> ,<ln> ,<email>, <msg></msg>
    cy.get('[name="first_name"]').type(firstN)
    cy.get('[name="last_name"]').type(lastN)
    cy.get('[name="email"]').type(eml)
    cy.get('[name="message"]').type(message)
})


//Scenario Outline: I want to verify page with multiple user2

When("I enter data from datable {string}, {string}, {string}, {string}", (firstN, lastN, eml, message) => {
    cy.get('[name="first_name"]').type(firstN)
    cy.get('[name="last_name"]').type(lastN)
    cy.get('[name="email"]').type(eml)
    cy.get('[name="message"]').type(message)
}) 