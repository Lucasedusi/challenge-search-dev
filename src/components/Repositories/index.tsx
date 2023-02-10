import { Container, Footer, Wrapper } from "./styles";

import { format, formatDistance, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import Stars from "../../assets/stars.svg";
import { useEffect, useState } from "react";
import api from "../../service/api";
import { Repository } from "../../@types/profile";
import { WifiNone } from "phosphor-react";

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
					<a href={repository.html_url} target="_blank">
						{repository.name}
					</a>

					<p>{repository.description}</p>

					<Footer>
						<div>
							<img src={Stars} alt="" />
							<p>{repository.stargazers_count}</p>
						</div>
						<WifiNone size={50} />
						<p>
							{formatDistance(new Date(repository.updated_at), new Date(), {
								addSuffix: true,
								locale: ptBr,
							})}
						</p>
					</Footer>
				</Wrapper>
			))}
		</Container>
	);
}
