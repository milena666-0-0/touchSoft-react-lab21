import "./forVeterinarians.scss";

import photo from "../../../../assets/forVeterinarians/photo.png";

export const ForVeterinarians = () => {
	return (
		<section className="Veterinarians">
			<div className="container">
				<div className="Veterinarians__row">
					<div className="Veterinarians__photo">
						<img src={photo} alt="" />
					</div>
					<div className="Veterinarians__info">
						<div className="Veterinarians__name">For Veterinarians</div>
						<div className="Veterinarians__title">
							We're here to support you and your practice
						</div>
						<div className="Veterinarians__text">
							Mixlab offers a simple, fast, reliable (and fun) home
							delivery pharmacy service for your clients. No more delays,
							no more miscommunications, no more grumpy pets. It’s time
							to partner with a pharmacy that cares about customer
							experience as much as you do.
						</div>
						<button className="Veterinarians__btn"type="">Learn More</button>
					</div>
				</div>
			</div>
		</section>
	);
};
