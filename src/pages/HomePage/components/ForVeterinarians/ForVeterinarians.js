import {Button} from '../../../../components/Button/Button';

import "./forVeterinarians.scss";

import photo from "../../../../static/imgs/forVeterinarians/photo.png";

export const ForVeterinarians = () => {
	return (
		<section className="veterinarians">
			<div className="container">
				<div className="veterinarians__row">
					<div className="veterinarians__photo">
						<img src={photo} alt="" />
					</div>
					<div className="veterinarians__info">
						<div className="veterinarians__name">For Veterinarians</div>
						<div className="veterinarians__title">
							We're here to support you and your practice
						</div>
						<div className="veterinarians__text">
							Mixlab offers a simple, fast, reliable (and fun) home
							delivery pharmacy service for your clients. No more delays,
							no more miscommunications, no more grumpy pets. It’s time
							to partner with a pharmacy that cares about customer
							experience as much as you do.
						</div>
						<Button width={166} height={48} label={'Learn More'}/>
					</div>
				</div>
			</div>
		</section>
	);
};
