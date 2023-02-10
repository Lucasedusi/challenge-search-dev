import { Link } from "react-router-dom";
import { ErrorContainer } from "./styles";

import { ArrowLeft, Warning } from "phosphor-react";

export function Error() {
	return (
		<ErrorContainer>
			<h1>
				<span>
					{" "}
					<Warning color="#edef00" weight="fill" size={42} />
				</span>
				Usuário Não Encontrado
			</h1>
			<Link className="error-button" to="/">
				<ArrowLeft size={22} />
				Retornar
			</Link>
		</ErrorContainer>
	);
}
