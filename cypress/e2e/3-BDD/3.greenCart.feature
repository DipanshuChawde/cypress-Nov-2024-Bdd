Feature: verify green cart web page to add multiple product

    Scenario Outline: to add multiple product
        Given i visit gk web page
        When i type <search> in search box
        And i add <products> in cart 
        Then i check out 
        And i verify <products> and place order
        Then i validate order placed

        Examples:
            | search | products        |
            | ca    | Capsicum,Carrot |
            | al    | Almonds,Walnuts |
            | ma    | Mango           |