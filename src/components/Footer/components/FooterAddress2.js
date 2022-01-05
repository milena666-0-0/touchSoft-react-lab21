import {FooterColumn} from './FooterColumn';

export const FooterAddress2 = () => {
	return (
		<FooterColumn>
			<div className="footer__nav-name">Los Angeles</div>
			<div className="footer__li">
				<a className="footer__link" href="">
					2223 Federal Ave Los Angeles, CA 90064
				</a>
			</div>
			<div className="footer__nav-name">Email</div>
			<div className="footer__li">
				<div>
					<a className="footer__link" href="">
						Mon-Sat 9am - 7pm PT
					</a>
				</div>
				<div>
					<a className="footer__link" href="">
						Sun 9am - 1pm PT
					</a>
				</div>
			</div>
		</FooterColumn>
	);
};
