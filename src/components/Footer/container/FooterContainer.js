import { FooterNavContainer } from "./FooterNavContainer";
import { FooterContactsContainer } from "./FooterContactsContainer";
import { FooterAddress1 } from "../components/FooterAddress1";
import { FooterAddress2 } from "../components/FooterAddress2";
import { FooterSocialMediaContainer } from "../container/FooterSocialMediaContainer";

import "../footer.scss";

export const FooterContainer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__container">
				<div className="footer__row">
					<FooterNavContainer />
					<FooterContactsContainer />
					< FooterAddress1/>
					<FooterAddress2 />
					<FooterSocialMediaContainer />
				</div>
				<div className="footer__policy">
					<span>
						<a href="/">2021 Mixlab, Inc.</a>
					</span>
					<span>
						<a href="/">Privacy Policy</a>
					</span>
					<span>
						<a href="/">Terms of Service</a>
					</span>
				</div>
				</div>
			</div>
		</footer>
	);
};
