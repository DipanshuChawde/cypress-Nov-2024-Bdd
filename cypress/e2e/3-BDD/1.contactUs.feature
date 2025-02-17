Feature: I want to verify web driver university contact us page

    Scenario: I want to verify page with valid data
        Given I navigate to web page url
        When I enter data for all fields
        And I click On submit Button
        Then I verify validation message