import styled from "styled-components";
import { paddingXFragment } from "../Layout";

export const NavbarWrapper = styled.nav`
	box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	padding-bottom: 15px;
	padding-top: 15px;

	${paddingXFragment}
`;

export const LogoAnchor = styled.a`
	text-decoration: none;
`;
export const LogoImage = styled.img`
	height: auto;
	width: 80px;
`;
