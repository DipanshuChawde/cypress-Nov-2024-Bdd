Feature: Automation Exercise
    @regression
    Scenario Outline: verify new user sign up and loged in
        Given I navigate to AE web page<index>
        When I click in sign up<index>
        And I fill the data click on create account button and verify for new user<index>
        Then I verify login for new user<index>

        Examples:
            | index |
            | 0     |
            | 1     |