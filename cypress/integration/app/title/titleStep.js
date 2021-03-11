import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I can see the page title {string}", (pageTitle) => {
	cy.title(pageTitle).should("eq", pageTitle);
});
