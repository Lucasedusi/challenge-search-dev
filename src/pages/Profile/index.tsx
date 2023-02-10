import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MessageError, UserInfo } from "../../@types/profile";
import { Header } from "../../components/Header";
import { Repositories } from "../../components/Repositories";
import { SideBar } from "../../components/SideBar";
import api from "../../service/api";
import { ProfileContainer, Wrapper } from "./styles";

export function Profile() {
	const { state: user } = useLocation();

	const [userInfo, setUserInfo] = useState<UserInfo>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<MessageError | null>(null);

	useEffect(() => {
		const getUser = async () => {
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

	return (
		<ProfileContainer>
			<Header />
			<Wrapper>
				<SideBar userInfo={userInfo} />
				<Repositories login={userInfo?.login} />
			</Wrapper>
		</ProfileContainer>
	);
}
