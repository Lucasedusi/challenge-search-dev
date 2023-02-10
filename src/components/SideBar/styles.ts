import styled from "styled-components";

export const Container = styled.aside`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors["white"]};
	border-radius: 8px;
	padding: 1.2rem;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
	align-items: center;
	gap: 1rem;

	.avatarProfile {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		> h1 {
			font-family: "Inter";
			font-weight: 700;
			font-size: 20px;
			color: ${({ theme }) => theme.colors["title-repository"]};
			margin: 0.2rem 0;
		}

		> p {
			font-family: "Inter";
			font-weight: 400;
			font-size: 14px;
			color: #a0aec0;
		}
	}
`;

export const Description = styled.div`
	display: flex;
	margin: 0 0 1.5rem;

	> p {
		font-family: "Inter";
		font-weight: 400;
		font-size: 16px;
		color: ${({ theme }) => theme.colors["description-profile"]};
		line-height: 24px;
	}
`;

export const Followers = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 1.5rem;

	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.6rem;

		> p {
			font-family: "Inter";
			font-weight: 400;
			font-size: 14px;
			color: ${({ theme }) => theme.colors["description-profile"]};
			padding: 0.5rem 0;
		}
	}
`;

export const GeneralInfo = styled.div`
	display: flex;
	flex-direction: column;

	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.6rem;

		> p,
		a {
			font-family: "Inter";
			font-weight: 400;
			font-size: 14px;
			color: ${({ theme }) => theme.colors["description-profile"]};
			padding: 0.5rem 0;
		}
	}
`;
