import styled from "styled-components";

export const ProfileContainer = styled.div``;

export const Wrapper = styled.div`
	margin: 5rem 7rem;
	padding: 0 1rem;

	display: grid;
	grid-template-columns: 256px 1fr;
	gap: 2rem;
	align-items: flex-start;

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		margin: 1rem 1rem;
	}
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem 8rem;
	gap: 6rem;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		padding: 1rem;
		gap: 1.5rem;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	.title-search {
		font-family: "Nunito";
		font-weight: 500;
		font-size: 32px;
		letter-spacing: 0.01em;

		color: #0069ca;
	}

	.title-dev {
		font-family: "Nunito";
		font-weight: 500;
		font-size: 32px;
		letter-spacing: 0.01em;

		color: #8c19d2;
	}
`;

export const FormSearch = styled.form`
	position: relative;
	display: flex;
	gap: 1.5rem;

	> input {
		width: 500px;
		height: 48px;
		padding: 0 3rem;
		border: 2px solid #8c19d2;
		border-radius: 6px;
		font-family: "Nunito";
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		color: rgba(0, 0, 0, 0.8);

		@media only screen and (max-width: 768px) {
			width: 100%;
		}

		::placeholder {
			font-family: "Inter";
			font-weight: 400;
			font-size: 18px;
			line-height: 28px;
			color: rgba(0, 0, 0, 0.36);
		}
	}

	.icon-search {
		width: 20px;
		height: 20px;
		position: absolute;
		box-sizing: border-box;
		top: 50%;
		left: 1rem;
		transform: translateY(-50%);
	}
`;
