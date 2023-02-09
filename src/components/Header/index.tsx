import { FormSearch, HeaderContainer, TitleContainer, Wrapper } from "./styles";

import IconSearch from "../../assets/icon-search.svg";
import { Container } from "../../pages/Home/styles";

export function Header() {
	return (
		<HeaderContainer>
			<Wrapper>
				<TitleContainer>
					<h1 className="title-search">Search</h1>
					<h1 className="title-dev">d_evs</h1>
				</TitleContainer>

				<FormSearch>
					<img className="icon-search" src={IconSearch} />
					<input placeholder="Search"></input>
				</FormSearch>
			</Wrapper>
		</HeaderContainer>
	);
}
