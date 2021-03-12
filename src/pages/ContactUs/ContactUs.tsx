import Helmet from "react-helmet";
import { MainElement } from "../../components/Layout";
import { DesignH1 } from "../../components/Text";

const ContactUs = () => (
	<>
		<Helmet>
			<title>Get in touch - cornerjob</title>
		</Helmet>
		<MainElement data-testid="contact-us">
			<DesignH1 data-testid="contact-us__heading">Contact us form</DesignH1>
			<p data-testid="contact-us__description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</MainElement>
	</>
);

export default ContactUs;
