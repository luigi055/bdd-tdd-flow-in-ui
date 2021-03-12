import { FooterWrapper, Copyright } from "./FooterStyled";

const Footer = () => (
	<FooterWrapper data-testid="footer">
		<Copyright data-testid="footer__copyright">
			Cornerjob © Copyright 2021
		</Copyright>
	</FooterWrapper>
);

export default Footer;
