import { Fragment } from "react";

import { FooterColumn } from "../components/FooterColumn";
import { NavView } from "../../NavView/NavView";
import { footerContactsList } from "../config/footerContactsData";

export const FooterContactsContainer = () => {
	return (
		<FooterColumn>
			{footerContactsList.map((contact) => {
				return (
					<Fragment key={contact.title}>
						<div className="footer__nav-name">{contact.title}</div>
						<NavView item={contact} />
					</Fragment>
				);
			})}
		</FooterColumn>
	);
};
