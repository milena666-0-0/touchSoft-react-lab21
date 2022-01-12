import { FooterColumn } from "../components/FooterColumn";
import { FooterSocialMediaView } from "../components/FooterSocialMediaView";
import { socialMediaList } from "../config/footerSocialMediaData";

export const FooterSocialMediaContainer = () => {
	return (
		<FooterColumn>
			<div className="footer__nav-name">Social</div>
			<div className="footer__media">
				{socialMediaList.map((socialMediaIcon, i) => (
					<FooterSocialMediaView key={i} item={socialMediaIcon} />
				))}
			</div>
		</FooterColumn>
	);
};
