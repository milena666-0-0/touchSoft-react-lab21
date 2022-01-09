import "./companies.scss";

import logo1 from "../../../../static/imgs/companies/logo1.png";
import logo2 from "../../../../static/imgs/companies/logo2.png";
import logo3 from "../../../../static/imgs/companies/logo3.png";
import logo4 from "../../../../static/imgs/companies/logo4.png";
import logo5 from "../../../../static/imgs/companies/logo5.png";

export const Companies = () => {
	return (
		<section className="companies">
			<div className="container">
				<div className="row">
					<div className="companies__item">
						<a href="">
							<img src={logo1} alt="logo" />
						</a>
					</div>
					<div className="companies__item">
						<a href="">
							<img src={logo2} alt="logo" />
						</a>
					</div>
					<div className="companies__item">
						<a href="">
							<img src={logo3} alt="logo" />
						</a>
					</div>
					<div className="companies__item">
						<a href="">
							<img src={logo4} alt="logo" />
						</a>
					</div>
					<div className="companies__item">
						<a href="">
							<img src={logo5} alt="logo" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
