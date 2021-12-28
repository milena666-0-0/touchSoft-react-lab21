import inst from '../../../static/imgs/footer/inst.png';
import facebook from '../../../static/imgs/footer/facebook.png';
import twitter from '../../../static/imgs/footer/twitter.png';
import smth from '../../../static/imgs/footer/smth.png';
import google from '../../../static/imgs/footer/google.png';

export const FooterSocialMedia = () => {
	return (
		<div className="footer__nav">
			<div className="footer__nav-name">Social</div>
			<div className="footer__media">
				<div className="footer__media-item">
					<a href="">
						<img src={inst} alt="instagram" />
					</a>
				</div>
				<div className="footer__media-item">
					<a href="">
						<img src={facebook} alt="facebook" />
					</a>
				</div>
				<div className="footer__media-item">
					<a href="">
						<img src={twitter} alt="twitter" />
					</a>
				</div>
				<div className="footer__media-item">
					<a href="">
						<img src={smth} alt="media" />
					</a>
				</div>
				<div className="footer__media-item">
					<a href="">
						<img src={google} alt="google" />
					</a>
				</div>
			</div>
		</div>
	);
};
