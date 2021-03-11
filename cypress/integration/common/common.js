import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the get in touch page", () => {
	cy.visit("http://localhost:3000");
});
