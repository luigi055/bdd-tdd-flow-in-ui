import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I can see the footer with all its elements", () => {
	cy.getByTestId("footer").should("be.visible");
});

Then("I can see the copyright {string}", (copyrightText) => {
	cy.getByTestId("footer__copyright").should("to.contain", copyrightText);
});
