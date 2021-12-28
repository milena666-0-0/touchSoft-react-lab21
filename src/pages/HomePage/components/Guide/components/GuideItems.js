import '../guide.scss';

// import {pic1, pic2, pic3} from "../../../../../assets/guide";
import pic1 from "../../../../../assets/guide/parrot.png";
import pic2 from "../../../../../assets/guide/rabbit.png";
import pic3 from "../../../../../assets/guide/dog.png";

export const GuideItems = () => {
	return (
		<div className="guide__items">
			<div className="guide__item">
				<img className="guide__item-pic" src={pic1} alt="pic" />
				<div className="guide__item-title">
					We receive your prescription
				</div>
				<div className="guide__item-desc">
					Either your veterinarian sends us a prescription or we reach out
					to them for you. Whatever is easiest!
				</div>
			</div>
			<div className="guide__item">
				<img className="guide__item-pic" src={pic2} alt="pic" />
				<div className="guide__item-title">
					We deliver your care package
				</div>
				<div className="guide__item-desc">
					Fast and free next-day delivery, straight to your door. Same-day
					in NYC and LA.
				</div>
			</div>
			<div className="guide__item">
				<img className="guide__item-pic" src={pic3} alt="pic" />
				<div className="guide__item-title">You treat your pet</div>
				<div className="guide__item-desc">
					Give your pet the care they need to feel better. Plus they can
					play with our included toy!
				</div>
			</div>
		</div>
	);
};
