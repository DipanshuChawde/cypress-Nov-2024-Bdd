Feature: verify GC web page to add multiple product

    Scenario Outline: to add multiple product of GC
        Given i visit web page GK
        When i type <search> in search box of GC
        And i add <products> in cart of GC
        Then i check out page
        And i verify <products> to place order
        Then i validate order placed msg

        Examples:
            | search | products        |
            | ca     | Capsicum,Carrot |
            | al     | Almonds,Walnuts |
            | ma     | Mango           |