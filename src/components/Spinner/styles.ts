import styled from "styled-components";

export const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	justify-content: center;
`;

export const TextLoading = styled.div`
	font-size: 32px;
	font-family: "Inter";
	font-weight: 700;
	color: ${({ theme }) => theme.colors["secondary"]};
	margin-left: 10px;
`;

export const LoadingIcon = styled.div`
	border: 8px solid ${({ theme }) => theme.colors["primary"]};
	border-left-color: ${({ theme }) => theme.colors["secondary"]};
	height: 60px;
	width: 60px;
	border-radius: 50%;
	animation: spin 1s linear infinite;
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;
