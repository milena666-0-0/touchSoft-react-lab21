import { HeaderNavContainer } from "../containers/HeaderNavContainer";
import { Button } from "../../Button/Button";

import { Link } from "react-router-dom";

import logo from "../../../static/imgs/header/logo.png";

export const HeaderView = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row header__row">
					<HeaderNavContainer />
					<div className="header__logo">
						<img src={logo} alt="" />
					</div>
					<div className="header__reg">
						<div>
							<a className="header__login" href="">
								Veterinarian login
							</a>
						</div>
						<div>
							<Button width={150} height={38} label={"Try Mixlab"} />
						</div>
						<div className="header__linkers">
							<Link to={"/"}>Home</Link>
							<Link to={"/counter"}>Counter</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
