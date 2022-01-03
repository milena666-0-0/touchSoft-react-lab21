import { FooterColumn } from "../components/FooterColumn";
import {NavView} from '../../NavView/NavView';

import "../footer.scss";

export const FooterNavContainer = () => {
	
	const footerNavList = [
		{ label: "Veterinarians", pathTo: '/' },
		{ label: "Products", pathTo: '/' },
		{ label: "How it Works", pathTo: '/' },
		{ label: "About us", pathTo: '/' },
		{ label: "Blog", pathTo: '/' },
		{ label: "Shop", pathTo: '/' },
		{ label: "Careers", pathTo: '/' },
		{ label: "Veterinarian login", pathTo: '/' },
		{ label: "Contact us", pathTo: '/' },
	];

	const renderFooterNavList = (footerElemList) => {
		const elements = footerElemList.map(footerElem => {
			return (
				<NavView key={footerElem.label} item={footerElem}/>	
			);
		});

		return elements;

	};

	const footerElements = renderFooterNavList(footerNavList);

	return (
		<FooterColumn>
			<div className="footer__nav-name">Quick Links</div>
			<nav>
				<ul className="footer__list">
					{footerElements}
				</ul>
			</nav>
		</FooterColumn>
	);
};
