import { Container, Footer, Wrapper } from "./styles";

import Stars from "../../assets/stars.svg";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { Repository } from "../../@types/profile";

type RepositoriesProps = {
	login?: string;
};

export function Repositories({ login }: RepositoriesProps) {
	const [repositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		const getRepositories = async () => {
			const { data } = await api.get<Repository[]>(`users/${login}/repos`);
			setRepositories(data);
		};

		getRepositories();
	}, [login]);

	return (
		<Container>
			{repositories.map((repository) => (
				<Wrapper>
					<h1>{repository.name}</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
						turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
						nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
						tellus elit sed risus. Maecenas eget condimentum velit, sit amet
						feugiat lectus.
					</p>

					<Footer>
						<div>
							<img src={Stars} alt="" />
							<p>100</p>
						</div>
						˚<p>Atualizado há 2 dias</p>
					</Footer>
				</Wrapper>
			))}
		</Container>
	);
}
