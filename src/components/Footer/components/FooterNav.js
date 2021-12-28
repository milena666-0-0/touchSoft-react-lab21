import '../footer.scss';

export const FooterNav = () => {
	return (
		<div className="footer__nav">
			<div className="footer__nav-name">Quick Links</div>
			<nav>
				<ul className="footer__list">
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Veterinarians
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Products
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							How it Works
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							About us
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Blog
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Shop
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Careers
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Veterinarian login
						</a>
					</li>
					<li className="footer__nav-li">
						<a className="footer__link" href="">
							Contact us
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
