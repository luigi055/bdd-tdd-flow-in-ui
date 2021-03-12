import ContactUsPage from "./ContactUs";
import { render, waitFor, screen } from "@testing-library/react";

describe("Testing ContactUsPage", () => {
	it("should show the correct head title", async () => {
		render(<ContactUsPage />);

		await waitFor(() =>
			expect(document.title).toEqual("Get in touch - cornerjob")
		);
	});

	it("should show the correct page title", () => {
		render(<ContactUsPage />);

		const { getByTestId } = screen;

		expect(getByTestId("contact-us__heading")).toHaveTextContent(
			"Contact us form"
		);
	});

	it("should show the correct page description", () => {
		render(<ContactUsPage />);

		const { getByTestId } = screen;

		expect(getByTestId("contact-us__description")).toHaveTextContent(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		);
	});
});
