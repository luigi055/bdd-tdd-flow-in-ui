import ContactUsPage from "./ContactUs";
import { render, waitFor } from "@testing-library/react";

describe("Testing ContactUsPage", () => {
	it("should show the correct head title", async () => {
		render(<ContactUsPage />);

		await waitFor(() =>
			expect(document.title).toEqual("Get in touch - cornerjob")
		);
	});
});
