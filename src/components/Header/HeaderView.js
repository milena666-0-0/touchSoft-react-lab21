import { HeaderNav } from "./HeaderNav";

import logo from "../../assets/header/logo.png";

export const HeaderView = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row header__row">
					<HeaderNav />
					<div className="header__logo">
						<img src={logo} alt="" />
					</div>
					<div className="header__reg">
						<div>
							<a className="header__login" href="">Veterinarian login</a>
						</div>
						<div>
							<button className="header__btn" type="">
							Try Mixlab
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
