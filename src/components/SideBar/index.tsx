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
import { UserInfo } from "../../@types/profile";

type SideBarProps = {
	userInfo?: UserInfo;
};

export function SideBar({ userInfo }: SideBarProps) {
	return (
		<Container>
			<Wrapper>
				<img className="avatarProfile" src={userInfo?.avatar_url} width={50} />
				<div className="info">
					<h1>{userInfo?.name}</h1>
					<p>@{userInfo?.login}</p>
				</div>
			</Wrapper>

			<Description>
				<p>{userInfo?.bio}</p>
			</Description>

			<Followers>
				<div>
					<img src={UserGroup} alt="Ícone de grupos de usuários" />
					<p>{userInfo?.followers} Seguidores</p>
				</div>

				<div>
					<img src={Heart} alt="Ícone de Coração" />
					<p>{userInfo?.following} Seguindo</p>
				</div>
			</Followers>

			<GeneralInfo>
				{userInfo?.company && (
					<div>
						<img src={Work} alt="Ícone da empresa onde trabalha" />
						<p>{userInfo.company}</p>
					</div>
				)}

				{userInfo?.location && (
					<div>
						<img src={Location} alt="Ícone da cidade em que se localiza" />
						<p>{userInfo.location}</p>
					</div>
				)}

				{userInfo?.email && (
					<div>
						<img src={Email} alt="Ícone de Email" />
						<p>{userInfo.email}</p>
					</div>
				)}

				{userInfo?.blog && (
					<div>
						<img src={WebSite} alt="Ícone de Website" />
						<a href={`${userInfo.blog}`} target="_blank">
							{userInfo.blog}
						</a>
					</div>
				)}

				{userInfo?.twitter_username && (
					<div>
						<img src={SocialMedia} alt="Ícone do Twitter" />
						<a
							href={`https://twitter.com/${userInfo.twitter_username}`}
							target="_blank"
						>
							@{userInfo.twitter_username}
						</a>
					</div>
				)}
			</GeneralInfo>
		</Container>
	);
}
