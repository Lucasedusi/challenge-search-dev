import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	.title-search {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 500;
		font-size: 80px;
		line-height: 109px;
		letter-spacing: 0.01em;

		color: #0069ca;
	}

	.title-dev {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 500;
		font-size: 80px;
		line-height: 109px;
		letter-spacing: 0.01em;

		color: #8c19d2;
	}
`;

export const FormSearch = styled.form`
	position: relative;
	display: flex;
	margin-top: 48px;
	gap: 1.5rem;

	> input {
		width: 500px;
		height: 48px;
		padding: 0 3rem;
		border: 1px solid #e2e8f0;
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

	.button-search {
		display: flex;
		background: #8c19d2;
		border-radius: 6px;
		justify-content: center;
		align-items: center;
		padding: 10px 52px;
		border: 0;

		color: #fff;
		font-family: "Inter";
		font-weight: 600;
		font-size: 18px;
		line-height: 28px;
		transition: all 0.3s;

		:hover {
			opacity: 0.9;
		}
	}
`;
