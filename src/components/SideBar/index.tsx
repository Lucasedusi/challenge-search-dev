import {
	Container,
	Description,
	Followers,
	GeneralInfo,
	Wrapper,
} from "./styles";

import UserGroup from "../../assets/userGroup.svg";
import Heart from "../../assets/heart.svg";
import Work from "../../assets/work.svg";
import Email from "../../assets/email.svg";
import WebSite from "../../assets/website.svg";
import Location from "../../assets/location.svg";
import SocialMedia from "../../assets/social.svg";

export function SideBar() {
	return (
		<Container>
			<Wrapper>
				<img
					className="avatarProfile"
					src="https://avatars.githubusercontent.com/u/33089713?v=4"
					width={50}
				/>
				<div className="info">
					<h1>Lucas Edu</h1>
					<p>@lucasedusi</p>
				</div>
			</Wrapper>

			<Description>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
					fugit, tempora quasi nostrum Modi.
				</p>
			</Description>

			<Followers>
				<div>
					<img src={UserGroup} alt="" />
					<p>240 Seguidores</p>
				</div>

				<div>
					<img src={Heart} alt="" />
					<p>42 Seguindo</p>
				</div>
			</Followers>

			<GeneralInfo>
				<div>
					<img src={Work} alt="" />
					<p>Petizze</p>
				</div>
				<div>
					<img src={Location} alt="" />
					<p>São Paulo</p>
				</div>
				<div>
					<img src={Email} alt="" />
					<p>lucasedu@gmail.com</p>
				</div>
				<div>
					<img src={WebSite} alt="" />
					<p>www.lucas.com</p>
				</div>
				<div>
					<img src={SocialMedia} alt="" />
					<p>@lucasdudu</p>
				</div>
			</GeneralInfo>
		</Container>
	);
}
