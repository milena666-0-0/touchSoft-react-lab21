import "../reviews.scss";

import dog from "../../../../../assets/reviews/dog.png";
import inst from "../../../../../assets/reviews/inst.png";

export const ReviewsSlides = () => {
	return (
		<div className="reviews-slider">
			<div className="reviews-slider__track">
				<div className="reviews-slider__item">
					<div className="reviews-slider__item-pic">
						<img src={dog} alt="dog" />
					</div>
					<div className="reviews-slider__item-info">
						<div className="reviews-slider__item-text">
							“Tootsie just received her Mixlab order and she’s so
							excited for it! Within two hours of ordering it got
							delivered to the house and its like she knew it was at the
							door. She absolutely hates taking her medicine but she
							truly loves her Mixlab box because it’s so informative,
							quick, easy to order but especially because includes a new
							toy each time! Thank you Mixlab for always taking care of
							her! She can’t wait to place her next order now!”
						</div>
						<div className="reviews-slider__item-media">
							<a href="">
								<img src={inst} alt="instagram" />
							</a>
							<span>Tootsie, CA</span>
						</div>
					</div>
				</div>
				<div className="reviews-slider__item">
					<div className="reviews-slide__item-pic">
						<img src={dog} alt="dog" />
					</div>
					<div className="reviews-slider__item-info">
						<div className="reviews-slider__item-text">
							“Tootsie just received her Mixlab order and she’s so
							excited for it! Within two hours of ordering it got
							delivered to the house and its like she knew it was at the
							door. She absolutely hates taking her medicine but she
							truly loves her Mixlab box because it’s so informative,
							quick, easy to order but especially because includes a new
							toy each time! Thank you Mixlab for always taking care of
							her! She can’t wait to place her next order now!”
						</div>
						<div className="reviews-slider__item-media">
							<a href="">
								<img src={inst} alt="instagram" />
							</a>
							<span>Tootsie, CA</span>
						</div>
					</div>
				</div>
				<div className="reviews-slider__item">
					<div className="reviews-slide__item-pic">
						<img src={dog} alt="dog" />
					</div>
					<div className="reviews-slider__item-info">
						<div className="reviews-slider__item-text">
							“Tootsie just received her Mixlab order and she’s so
							excited for it! Within two hours of ordering it got
							delivered to the house and its like she knew it was at the
							door. She absolutely hates taking her medicine but she
							truly loves her Mixlab box because it’s so informative,
							quick, easy to order but especially because includes a new
							toy each time! Thank you Mixlab for always taking care of
							her! She can’t wait to place her next order now!”
						</div>
						<div className="reviews-slider__item-media">
							<a href="">
								<img src={inst} alt="instagram" />
							</a>
							<span>Tootsie, CA</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
