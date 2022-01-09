import {Fragment} from 'react';

import { FooterColumn } from "../components/FooterColumn";
import {NavView} from '../../NavView/NavView';

export const FooterContactsContainer = () => {
	const FooterContactsList = [
		{ title: "Call or Text", label: "Veterinarians", pathTo: '/' },
		{ title: "Email", label: "hello@mixlabrx.com", pathTo: '/' },
		{ title: "Fax", label: "(212) 967-0892", pathTo: '/' }
	];

	const renderFooterContacts = (footerContacts) => {

		const elements = footerContacts.map((contact) => {

			return (
				<Fragment key={contact.title}>
					<div className="footer__nav-name">{contact.title}</div>
					<NavView item={contact}/>
				</Fragment>
			);
		});
		return elements;
	};

	const footerContacts = renderFooterContacts(FooterContactsList);

	return (
		<FooterColumn>
			{footerContacts}
		</FooterColumn>
	);
};
