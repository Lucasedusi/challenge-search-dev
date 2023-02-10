import { Container, Footer, Wrapper } from "./styles";

import Stars from "../../assets/stars.svg";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { Repository } from "../../@types/profile";

type RepositoriesProps = {
	search: string;
	login?: string;
};

export function Repositories({ search, login }: RepositoriesProps) {
	const [repositories, setRepositories] = useState<Repository[]>([]);

	const filteredRepos =
		search.length === 0
			? repositories
			: repositories.filter(({ name }) => name.includes(search));

	useEffect(() => {
		const getRepositories = async () => {
			const { data } = await api.get<Repository[]>(`users/${login}/repos`);
			const sortedRepos = data.sort(
				(a, b) => b.stargazers_count - a.stargazers_count
			);
			setRepositories(sortedRepos);
		};

		getRepositories();
	}, [login]);

	return (
		<Container>
			{filteredRepos.map((repository) => (
				<Wrapper>
					<h1>{repository.name}</h1>

					<p>{repository.description}</p>

					<Footer>
						<div>
							<img src={Stars} alt="" />
							<p>{repository.stargazers_count}</p>
						</div>
						˚<p>{repository.updated_at}</p>
					</Footer>
				</Wrapper>
			))}
		</Container>
	);
}
