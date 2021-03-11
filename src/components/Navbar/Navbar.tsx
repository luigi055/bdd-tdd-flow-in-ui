import { LogoAnchor, LogoImage, NavbarWrapper } from "./NavbarStyled";

const Navbar = () => (
	<NavbarWrapper data-testid="navbar">
		<LogoAnchor href="https://cornerjob.com" data-testid="navbar__logo">
			<LogoImage
				src="https://www.eurofirmsgroup.com/wp-content/uploads/2020/11/20201123_Nuevo-CornerJob.png"
				alt="Corner Job Logo"
				width="100px"
				height="auto"
			/>
		</LogoAnchor>
	</NavbarWrapper>
);

export default Navbar;
