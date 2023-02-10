import React from "react";
import { LoadingIcon, SpinnerContainer, TextLoading } from "./styles";

export function Spinner() {
	return (
		<SpinnerContainer>
			<LoadingIcon hidden={false} />
			<TextLoading>Buscando Dev</TextLoading>
		</SpinnerContainer>
	);
}
