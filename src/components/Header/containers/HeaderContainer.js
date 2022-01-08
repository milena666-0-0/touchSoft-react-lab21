import { useState } from "react";

import { HeaderView } from "../components/HeaderView";

export const HeaderContainer = () => {
	const [activeMenu, setActiveMenu] = useState(false);

	const handleActiveBurgerMenu = () => {
		setActiveMenu(!activeMenu);
		!activeMenu 
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	};

	return (
		<HeaderView
			handleActiveBurgerMenu={handleActiveBurgerMenu}
			activeMenu={activeMenu}
		/>
	);
};
