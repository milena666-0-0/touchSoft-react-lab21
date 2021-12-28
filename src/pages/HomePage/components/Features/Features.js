import './features.scss';

import dog from '../../../../assets/features/dog.png';

export const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<div className="features__row">
					<div className="features__info">
						<div className="features__info-title">
							We couldn’t find a pharmacy experience worthy of our best
							buds— so we created one.
						</div>
						<div>
                            <img src={dog} alt="dog"/>
                        </div>
					</div>
					<div className="features__list">
						<div className="features__item">
							<div className="features__item-title">
								Patients first, always
							</div>
							<div className="features__item-info">
								We know how stressful it can be when your pet needs
								meds. That’s why we offer free next-day delivery and
								even do same-day in NYC and LA. We got you.
							</div>
							<div className="features__item-line"></div>
						</div>
                        <div className="features__item">
							<div className="features__item-title">Tailored care</div>
							<div className="features__item-info">
								We’ll work with you and your veterinarian to find the
								very best solution for your pet. With our custom
								compounded options, we can change the dosage, flavor and
								form. We even have a flavor guarantee with over 40
								options! 
                                <p>
                                P.S. Everyone seems to love the
								chicken-flavored chew treats!
                                </p>
							</div>
							<div className="features__item-line"></div>
						</div> 
						<div className="features__item">
							<div className="features__item-title">
								Support, 7 days a week
							</div>
							<div className="features__item-info">
								You’re not alone. Text, call, or email us 7 days a
								week—we’ll answer and do our best to sprinkle in a bit
								of sunshine. ☀️
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
