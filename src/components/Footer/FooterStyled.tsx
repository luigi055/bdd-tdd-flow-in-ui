import styled from "styled-components";

export const FooterWrapper = styled.footer`
	align-items: center;
	background: ${({ theme }) => theme.primaryColor};
	display: flex;
	justify-content: center;
	padding: 25px 0;
`;

export const Copyright = styled.strong`
	color: ${({ theme }) => theme.onPrimaryColor};
`;
