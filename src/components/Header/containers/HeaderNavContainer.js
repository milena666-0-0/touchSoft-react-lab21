import { NavView } from "../../NavView/NavView";
import { navData } from "../config/headerNavData";

import "../header.scss";

export const HeaderNavContainer = ({handleActiveBurgerMenu}) => {


	const hideRoutingIntoMenu = () => {

		const newNavList = [
			...navData,
			{label: 'Home', pathTo: '/'},
			{label: 'Counters', pathTo: '/counters'},
			{label: 'Counter', pathTo: '/counter'}
		];
		
		return window.screen.width <= 576 ? newNavList : navData;

	};

	const navList = hideRoutingIntoMenu();

	const styles = {
		textDecoration: "none",
		color: "#000",
		fontSize: "14px",
		lineHeight: "18px",
		cursor: "pointer",
	};

	return (
		<ul className="header__nav-list" onClick={handleActiveBurgerMenu}>
			{navList.map((navItem) => (
				<NavView key={navItem.label} item={navItem} styles={styles} />
			))}
		</ul>
	);
};
