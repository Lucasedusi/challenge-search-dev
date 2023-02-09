import { Container, FormSearch, TitleContainer, Wrapper } from "./styles";
import IconSearch from "../../assets/icon-search.svg";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<h1 className="title-search">Search</h1>
					<h1 className="title-dev">d_evs</h1>
				</TitleContainer>
				<FormSearch>
					<img className="icon-search" src={IconSearch} />
					<input placeholder="Search"></input>
					<Link className="button-search" type="submit" to={"/profile"}>
						Search
					</Link>
				</FormSearch>
			</Wrapper>
		</Container>
	);
}
