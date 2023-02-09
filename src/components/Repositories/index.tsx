import { Container, Footer, Wrapper } from "./styles";

import Stars from "../../assets/stars.svg";

export function Repositories() {
	return (
		<Container>
			<Wrapper>
				<h1>Repositório nome</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus.
				</p>

				<Footer>
					<div>
						<img src={Stars} alt="" />
						<p>100</p>
					</div>
					˚<p>Atualizado há 2 dias</p>
				</Footer>
			</Wrapper>

			<Wrapper>
				<h1>Repositório nome</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
					turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
					fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
					elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
					lectus.
				</p>

				<Footer>
					<div>
						<img src={Stars} alt="" />
						<p>100</p>
					</div>
					˚<p>Atualizado há 2 dias</p>
				</Footer>
			</Wrapper>
		</Container>
	);
}
