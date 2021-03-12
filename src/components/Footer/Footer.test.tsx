import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Testing Footer component", () => {
	it("should render the footer component", () => {
		render(<Footer />);

		const { getByTestId } = screen;

		expect(getByTestId("footer")).toBeInTheDocument();
		expect(getByTestId("footer__copyright")).toHaveTextContent(
			"Cornerjob © Copyright 2021"
		);
	});
});
