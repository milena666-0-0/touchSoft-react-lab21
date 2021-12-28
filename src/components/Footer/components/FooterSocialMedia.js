import inst from '../../../assets/footer/inst.png';
import facebook from '../../../assets/footer/facebook.png';
import twitter from '../../../assets/footer/twitter.png';
import smth from '../../../assets/footer/smth.png';
import google from '../../../assets/footer/google.png';

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
