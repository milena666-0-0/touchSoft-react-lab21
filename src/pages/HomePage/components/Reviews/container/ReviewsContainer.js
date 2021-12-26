import {ReviewsSlides} from '../components/ReviewsSlides';

import hearts from "../../../../../assets/reviews/hearts.png";

export const ReviewsContainer = () => {
	return (
		<section className="reviews">
            <img
				className="reviews-slider__item-hearts"
				src={hearts}
				alt="hearts"
			/>
			<div className="reviews__title">Pets love Mixlab!</div>
			<div className="reviews__info">
                See why we're 5 stars on <span> <a href="">Yelp</a>
                    </span>,<span> <a href="">Google</a>
                    </span> and <span> <a href="">Facebook</a>
                    </span>:
                </div>
            <ReviewsSlides/>
		</section>
	);
};
