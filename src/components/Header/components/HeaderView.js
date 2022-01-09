import { Link } from "react-router-dom";
import classNames from "classnames";

import { HeaderNavContainer } from "../containers/HeaderNavContainer";
import { Button } from "../../Button/Button";

import logo from "../../../static/imgs/header/logo.png";

export const HeaderView = ({ handleActiveBurgerMenu, activeMenu }) => {

	const activeMenuClass = classNames(
		"header__burger-menu", 
		{"header__burger-menu--active": activeMenu},
	);

	return (
		<header className="header">
			<div className="container">
				<div className="row header__row">
					<div
						className={activeMenuClass}
						onClick={handleActiveBurgerMenu}
					>
						<i className="fas fa-bars"></i>
					</div>
					<HeaderNavContainer handleActiveBurgerMenu={handleActiveBurgerMenu}/>
					<div className="header__logo">
						<Link to="/">
							<img src={logo} alt="" />
						</Link>
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
							<Link className="header__linkers-home" to={"/"}>Home</Link>
							<Link to={"/counters"}>Counters</Link>
							<Link to={"/counter"}>Counter</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
