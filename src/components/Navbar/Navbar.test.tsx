import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";

describe("Testing Navbar", () => {
	it("should be rendered correctly", () => {
		render(<Navbar />);

		const { getByTestId } = screen;

		expect(getByTestId("navbar")).toBeInTheDocument();
	});

	it("should logo redirection be pointing to the correct url", () => {
		render(<Navbar />);

		const { getByTestId } = screen;

		expect(getByTestId("navbar__logo")).toHaveAttribute(
			"href",
			"https://cornerjob.com"
		);
	});
});
