import { FooterColumn } from "../components/FooterColumn";
import { NavView } from "../../NavView/NavView";
import { footerNavList } from "../config/footerNavListData";

import "../footer.scss";

export const FooterNavContainer = () => {
	return (
		<FooterColumn>
			<div className="footer__nav-name">Quick Links</div>
			<nav>
				<ul className="footer__list">
					{footerNavList.map((footerElem) => (
						<NavView key={footerElem.label} item={footerElem} />
					))}
				</ul>
			</nav>
		</FooterColumn>
	);
};
