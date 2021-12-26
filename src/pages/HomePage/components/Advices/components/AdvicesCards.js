import "../advices.scss";

import pic1 from "../../../../../assets/advices/pic1.png";
import pic2 from "../../../../../assets/advices/pic2.png";

export const AdvicesCards = () => {
	return (
		<div className="advices-cards">
			<div className="advices__card">
				<div className="advices__card-pic">
					<img src={pic1} alt="" />
				</div>
				<div className="advices__card-info">
					<div className="advices__card-date">May 3, 2021</div>
					<div className="advices__card-title">What is compounding?</div>
					<div className="advices__card-text">
						Compounding is the art and science of preparing personalized
						medications.
					</div>
					<a className="advices__card-link" href="">
						Read the article
					</a>
				</div>
			</div>
			<div className="advices__card">
				<div className="advices__card-pic">
					<img src={pic2} alt="" />
				</div>
				<div className="advices__card-info">
					<div className="advices__card-date">May 3, 2021</div>
					<div className="advices__card-title">What is compounding?</div>
					<div className="advices__card-text">
						Compounding is the art and science of preparing personalized
						medications.
					</div>
					<a className="advices__card-link" href="">
						Read the article
					</a>
				</div>
			</div>
		</div>
	);
};
