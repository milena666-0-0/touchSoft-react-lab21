import { ReviewSlidesContainer } from "../container/ReviewsSlidesContainer";

import hearts from "../../../../../static/imgs/reviews/hearts.png";

export const ReviewLayout = () => {
	return (
		<section className="reviews">
			<img
				className="reviews-slider__item-hearts"
				src={hearts}
				alt="hearts"
			/>
			<div className="reviews__title">Pets love Mixlab!</div>
			<div className="reviews__info">
				See why we're 5 stars on
				<span>
					<a href="">Yelp</a>
				</span>
				,
				<span>
					<a href="">Google</a>
				</span>
				and
				<span>
					<a href="">Facebook</a>
				</span>
				:
			</div>
			<ReviewSlidesContainer />
		</section>
	);
};
