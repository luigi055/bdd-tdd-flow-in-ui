import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I see the navigation bar", () => {
	cy.getByTestId("navbar").should("be.visible");
});

Then("I can see the navigation bar with all its navigation", () => {
	cy.getByTestId("navbar").should("be.visible");
	cy.getByTestId("navbar__logo").should("be.visible");
});

Then("I can see the logo pointing to {string}", (url) => {
	cy.getByTestId("navbar__logo").should("have.attr", "href").and("eq", url);
});
