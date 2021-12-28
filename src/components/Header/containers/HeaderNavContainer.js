import { HeaderNavView } from "../components/HeaderNavView";

import "../header.scss";

export const HeaderNavContainer = () => {
	const navList = [
		{ label: "Veterinarians", pathTo: "/" },
		{ label: "How it works", pathTo: "/" },
		{ label: "About us", pathTo: "/" },
		{ label: "Blog", pathTo: "/" },
		{ label: "Shop", pathTo: "/" },
	];

	const navElements = navList.map((navItem) => (
		<HeaderNavView key={navItem.label} item={navItem} />
	));

	return (
		<ul className="header__nav-list">
			{navElements}
		</ul>
	);
};
