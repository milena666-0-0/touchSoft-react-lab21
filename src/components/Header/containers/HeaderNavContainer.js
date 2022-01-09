import { NavView } from "../../NavView/NavView";

import "../header.scss";

export const HeaderNavContainer = () => {

	const navList = [
		{ label: "Veterinarians", pathTo: "/" },
		{ label: "How it works", pathTo: "/" },
		{ label: "About us", pathTo: "/" },
		{ label: "Blog", pathTo: "/" },
		{ label: "Shop", pathTo: "/" },
	];

	const styles = {
		'textDecoration': 'none',
		'color': '#000',
		'fontSize': '14px',
		'lineHeight': '18px',
		'cursor': 'pointer'
	};

	const navElements = navList.map((navItem) => (
		<NavView key={navItem.label} item={navItem} styles={styles}/>
	));

	return (
		<ul className="header__nav-list">
			{navElements}
		</ul>
	);
};
