Feature: I want to verify web driver university contact us page

    Scenario: I want to verify page with valid data
        Given I navigate to web page url
        When I enter data for all fields
        And I click On submit Button
        Then I verify validation message

    Scenario: I want to verify page with datatable
        Given I navigate to web page url
        When I enter data foe all fields from datatable
            | fn     | ln       | email            | msg                |
            | aditya | masalkar | aditya@gmail.com | i am learning java |
        And I click On submit Button
        Then I verify validation message


    Scenario Outline: I want to verify page with multiple user
        Given I navigate to web page url1
        When I enter data from datable fn=<fn> and ln=<ln> and email=<email> and message=<msg> to fill data
        And I click On submit Button
        Then I verify validation message

        Examples:
            | fn     | ln       | email            | msg             |
            | aditya | masalkar | aditya@gmail.com | iamlearningjava |
            | Neel   | Chawde   | neel@gmil.com    | iovefootball    |
            | rucha  | gaware   | rucha@gmail.com  | ilovemovies     |


    Scenario Outline: I want to verify page with multiple user2
        Given I navigate to web page url
        When I enter data from datable "<fn>", "<ln>", "<email>", "<msg>"
        And I click On submit Button
        Then I verify validation message

        Examples:
            | fn     | ln       | email            | msg                |
            | aditya | masalkar | aditya@gmail.com | i am learning java |
            | Neel   | Chawde   | neel@gmil.com    | i love football    |
            | rucha  | gaware   | rucha@gmail.com  | i love movies      |