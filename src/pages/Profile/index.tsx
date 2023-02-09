import { Header } from "../../components/Header";
import { Repositories } from "../../components/Repositories";
import { SideBar } from "../../components/SideBar";
import { ProfileContainer, Wrapper } from "./styles";

export function Profile() {
	return (
		<ProfileContainer>
			<Header />
			<Wrapper>
				<SideBar />
				<Repositories />
			</Wrapper>
		</ProfileContainer>
	);
}
