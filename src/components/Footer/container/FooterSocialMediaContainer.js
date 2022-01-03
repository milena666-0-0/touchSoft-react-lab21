import {FooterColumn} from '../components/FooterColumn';
import { FooterSocialMediaView } from '../components/FooterSocialMediaView';

import inst from '../../../static/imgs/footer/inst.png';
import facebook from '../../../static/imgs/footer/facebook.png';
import twitter from '../../../static/imgs/footer/twitter.png';
import smth from '../../../static/imgs/footer/smth.png';
import google from '../../../static/imgs/footer/google.png';

export const FooterSocialMediaContainer = () => {

    const socialMediaList = [
        {icon: inst, pathTo: '/'},
        {icon: facebook, pathTo: '/'},
        {icon: twitter, pathTo: '/'},
        {icon: smth, pathTo: '/'},
        {icon: google, pathTo: '/'},
    ];

    const renderSocialMediaIcons = (iconsList) => {
        const elements = iconsList.map((socialMediaIcon, i) => {
            return <FooterSocialMediaView key={i} item={socialMediaIcon}/>
        });
        return elements;
    };

    const socialMediaIcons = renderSocialMediaIcons(socialMediaList);

    return(
        <FooterColumn>
            <div className="footer__nav-name">Social</div>
			<div className="footer__media">
			{socialMediaIcons}
			</div>
        </FooterColumn>
    );
};