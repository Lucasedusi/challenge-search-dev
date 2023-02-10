import styled from "styled-components";

export const ErrorContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	justify-content: center;
	flex-direction: column;
	gap: 1.5rem;

	h1 {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-direction: column;

		font-family: "Inter";
		font-weight: 700;
		font-size: 14px;
		color: #0069ca;
	}

	.error-button {
		gap: 0.5rem;
		display: flex;
		background: #8c19d2;
		border-radius: 6px;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 1.5rem;
		border: 0;

		color: #fff;
		font-size: 16px;
		font-weight: 700;
		font-family: "Inter";
	}
`;
