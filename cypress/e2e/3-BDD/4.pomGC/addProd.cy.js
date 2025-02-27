/// <reference types ="cypress" />
import homeP from "../../pages/4.GCPage"

let hp=new homeP()
Given("i visit web page GK",()=>{
 hp.visitUrl()
})

When("i type {word} in search box of GC",(product)=>{
hp.typeProductSearch(product)
})

And("i add {word} in cart of GC",(products)=>{
hp.toAddProductInCart(products)
})

Then("i check out page",()=>{
hp.proceedToCheckout()
})

And("i verify {word} to place order",(products)=>{
hp.verifyForProuctsInCart(products)
})

Then("i validate order placed msg",()=>{
hp.verifySuccessfullyPlacedMsg()
})