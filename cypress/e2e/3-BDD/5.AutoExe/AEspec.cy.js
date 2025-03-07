/// <reference types="cypress" />
import page from "../../pages/5.AEPage"
import data from "../../../fixtures/5.AEPayload"

let hp = new page()
let el;
Given("I navigate to AE web page{word}", (index) => {
    el=data[index]
    hp.urlVisit(hp.selectors.url)
})

When("I click in sign up{word}", (index) => {
    hp.btnClick(hp.selectors.loginSignUpbtn)
})

And("I fill the data click on create account button and verify for new user{word}", (index) => {
    hp.registerNewUser(el)
})

Then("I verify login for new user{word}", (index) => {
    hp.btnClick(hp.selectors.logoutBtn)
    hp.loginOrSignUp(hp.selectors.useremailCss, hp.selectors.passwordcsslogin, hp.selectors.loginBtnCss, el.NewUEml, el.password)
    hp.validationText(hp.selectors.loginNameCss, el.NewUNm)
})
