import styled from "styled-components";

export const Container = styled.aside`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors["white"]};
	border-radius: 8px;
	padding: 1.2rem;
`;

export const Wrapper = styled.div`
	border-bottom: 1px solid #e2e8f0;
	margin-bottom: 1.2rem;

	> a {
		font-family: "Inter";
		font-weight: 700;
		font-size: 20px;
		color: ${({ theme }) => theme.colors["title-repository"]};
	}

	> p {
		margin: 1.2rem 0;
		font-family: "Inter";
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: ${({ theme }) => theme.colors["description-profile"]};
	}
`;

export const Footer = styled.div`
	display: flex;
	margin: 1.2rem 0;
	flex-direction: row;
	align-items: flex-end;

	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		> p {
			font-family: "Inter";
			font-weight: 400;
			font-size: 14px;
			line-height: 24px;
			color: ${({ theme }) => theme.colors["description-profile"]};
		}
	}

	> p {
		font-family: "Inter";
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: ${({ theme }) => theme.colors["description-profile"]};
	}
`;
