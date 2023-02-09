import styled from "styled-components";

export const Container = styled.aside`
	display: flex;
	flex-direction: column;
	background: #fff;
	border-radius: 8px;
	padding: 1.2rem;
`;

export const Wrapper = styled.div`
	border-bottom: 1px solid #e2e8f0;
	margin-bottom: 1.2rem;

	> h1 {
		font-family: "Inter";
		font-weight: 700;
		font-size: 20px;
		color: #171923;
	}

	> p {
		margin: 1.2rem 0;
		font-family: "Inter";
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #4a5568;
	}
`;

export const Footer = styled.div`
	display: flex;
	margin: 1.2rem 0;
	flex-direction: row;
	align-items: center;
	gap: 1rem;

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
			color: #4a5568;
		}
	}

	> p {
		font-family: "Inter";
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: #4a5568;
	}
`;
