Feature: Verify Add to cart functionality
    @regression
    Scenario: verify add to cart functionality for cashwe
        Given I navigate to green cart page url
        When I type ca in seachbox and click on search button
        And I select cashwe and add to cart
        And I Proceed to checkout
        Then I validate checkout page