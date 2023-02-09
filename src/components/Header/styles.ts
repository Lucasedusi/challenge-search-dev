import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	background: #fff;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 1rem 6rem;
	gap: 6rem;
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
