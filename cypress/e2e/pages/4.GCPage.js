export default class homePage{
    selectors = {
        url : "https://rahulshettyacademy.com/seleniumPractise/#/",
        searchBox : 'input[placeholder="Search for Vegetables and Fruits"]',
        searchBoxClick : '[class="search-button"]',
        //products
        productContainer:'.products >.product',
        addToCartBtn : 'ADD TO CART',
        //chechout
        checkOutImg : '[class="cart-icon"]',
        proceedToChecOut : 'PROCEED TO CHECKOUT',
        //checkout page 
        tableRow: 'table[class="cartTable"] > tbody >tr',
        tableProductNameCol : 'td > [class="product-name"]',
        //place final order
        palceOrderBtn : 'Place Order',
        selectCountry : 'select',
        checkBox : '[type="checkbox"]',
        finalProceedBtn: 'Proceed',
        //placeorder msg 
        successfullyPlacedOrder : "Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!"

    }

    visitUrl() {
        cy.visit(this.selectors.url)
        
    }

    typeProductSearch(search){
        cy.get(this.selectors.searchBox).type(search)
        cy.get(this.selectors.searchBoxClick).click()
        cy.wait(2000)
    }

    toAddProductInCart(productsDetails){
          // cy.log(prod) //Capsicum,Carrot
    let products = productsDetails.split(",") //[Capsicum, Carrot]
    //cy.log(products) 
    products.forEach((el, idx) => {
        cy.get(this.selectors.productContainer).contains(el).parent().contains(this.selectors.addToCartBtn).click()
    });
    }

    proceedToCheckout(){
        cy.get(this.selectors.checkOutImg).click()
        cy.contains(this.selectors.proceedToChecOut).click()
    
    }

    verifyForProuctsInCart(prod){
        let verifyProd = prod.split(",") //[Capsicum, Carrot]
    let tableVal = []
    cy.get(this.selectors.tableRow).each((el, idx) => {
        //cy.log(el.find('td > [class="product-name"]').text())
        let pname = el.find(this.selectors.tableProductNameCol).text()
        let pArr = pname.split("-") //["Carrot "," 1 Kg"]
        tableVal.push(pArr[0].trim())
    }).then(() => {
        expect(tableVal).to.have.members(verifyProd)
    })

    cy.contains(this.selectors.palceOrderBtn).click()
    cy.wait(2000)
    cy.get(this.selectors.selectCountry).select('India')
    cy.get(this.selectors.checkBox).click()
    cy.contains(this.selectors.finalProceedBtn).click()
    cy.wait(1000)

    }

    verifySuccessfullyPlacedMsg(){
        cy.contains(this.selectors.successfullyPlacedOrder).should('be.visible')
    }

}