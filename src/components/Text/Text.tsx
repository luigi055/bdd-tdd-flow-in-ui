import styled, { css } from "styled-components";

const textStyles = css`
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
`;

const Heading = styled("h1")`
	${textStyles}
	line-height: 1.13;
	color: ${({ theme }) => theme.onPrimaryColor};
`;

export const DesignH1 = styled(Heading)`
	font-size: var(--h1);
	margin-bottom: 5px;
`;
