import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageError, UserInfo } from "../../@types/profile";
import { Repositories } from "../../components/Repositories";
import { SideBar } from "../../components/SideBar";
import api from "../../service/api";
import {
	FormSearch,
	ProfileContainer,
	TitleContainer,
	Wrapper,
	Header,
} from "./styles";

import IconSearch from "../../assets/icon-search.svg";
import { Spinner } from "../../components/Spinner";

export function Profile() {
	const { state: user } = useLocation();
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState<UserInfo>();
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<MessageError | null>(null);

	useEffect(() => {
		const getUser = async () => {
			if (!user) return navigate("/");

			setLoading(true);
			setError(null);

			try {
				const { data } = await api.get<UserInfo>(`users/${user}`);

				setUserInfo(data);
			} catch (err: any) {
				if (err?.response?.status === 404) {
					setError({
						message: "Usuário não encontrado",
					});
				}

				setError({ message: "Ocorreu um erro inesperado" });
			} finally {
				setLoading(false);
			}
		};

		getUser();
	}, [user]);

	if (loading) return <Spinner />;
	if (error) return <h1>ruim</h1>;

	return (
		<ProfileContainer>
			<Header>
				<TitleContainer>
					<h1 className="title-search">Search</h1>
					<h1 className="title-dev">d_evs</h1>
				</TitleContainer>

				<FormSearch>
					<img className="icon-search" src={IconSearch} />
					<input
						value={search}
						onChange={({ target }) => setSearch(target.value)}
						placeholder="Search"
					></input>
				</FormSearch>
			</Header>
			<Wrapper>
				<SideBar userInfo={userInfo} />
				<Repositories search={search} login={userInfo?.login} />
			</Wrapper>
		</ProfileContainer>
	);
}
