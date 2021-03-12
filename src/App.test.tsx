import { render } from "@testing-library/react";
import App from "./App";

describe("Testing App", () => {
	it("should detect dead code in code coverage", () => {
		const { container } = render(<App />);

		expect(container).toBeInTheDocument();
	});
});
