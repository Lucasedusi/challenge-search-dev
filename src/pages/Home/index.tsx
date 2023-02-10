import { Container, FormSearch, TitleContainer, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

import IconSearch from "../../assets/icon-search.svg";
import { FormEvent, useState } from "react";

export function Home() {
	const navigate = useNavigate();

	const [user, setUser] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		navigate("/profile", {
			state: user,
		});
	}

	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<h1 className="title-search">Search</h1>
					<h1 className="title-dev">d_evs</h1>
				</TitleContainer>
				<FormSearch onSubmit={handleSubmit}>
					<img className="icon-search" src={IconSearch} />
					<input
						value={user}
						onChange={({ target }) => setUser(target.value)}
						placeholder="Search"
					></input>
					<button className="button-search" type="submit">
						Search
					</button>
				</FormSearch>
			</Wrapper>
		</Container>
	);
}
