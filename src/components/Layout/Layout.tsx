import styled, { css } from "styled-components";
export const paddingXFragment = css`
	padding-left: 25px;
	padding-right: 25px;
`;

export const MainLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: start;
`;

export const MainElement = styled.main`
	display: flex;
	flex-grow: 100;
	padding-bottom: 25px;
	padding-top: 25px;
	flex-direction: column;

	${paddingXFragment}
`;
