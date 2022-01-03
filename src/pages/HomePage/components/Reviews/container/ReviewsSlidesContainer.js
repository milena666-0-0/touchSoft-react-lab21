import { Swiper, SwiperSlide } from "swiper/react";

import { ReviewsSlidesLayout } from "../components/ReviewsSlidesLayout";

import 'swiper/css';
import '../reviews.scss';

import dog from "../../../../../static/imgs/reviews/dog.png";
import inst from "../../../../../static/imgs/reviews/inst.png";

export const ReviewSlidesContainer = () => {
	const slideList = [
		{
			dogPic: dog,
			text: `“Tootsie just received her Mixlab order and she’s so
            excited for it! Within two hours of ordering it got
            delivered to the house and its like she knew it was at the
            door. She absolutely hates taking her medicine but she
            truly loves her Mixlab box because it’s so informative,
            quick, easy to order but especially because includes a new
            toy each time! Thank you Mixlab for always taking care of
            her! She can’t wait to place her next order now!”`,
			socialMedia: inst,
			nickName: "Tootsie, CA",
		},
		{
			dogPic: dog,
			text: `“Tootsie just received her Mixlab order and she’s so
            excited for it! Within two hours of ordering it got
            delivered to the house and its like she knew it was at the
            door. She absolutely hates taking her medicine but she
            truly loves her Mixlab box because it’s so informative,
            quick, easy to order but especially because includes a new
            toy each time! Thank you Mixlab for always taking care of
            her! She can’t wait to place her next order now!”`,
			socialMedia: inst,
			nickName: "Tootsie, CA",
		},
		{
			dogPic: dog,
			text: `“Tootsie just received her Mixlab order and she’s so
            excited for it! Within two hours of ordering it got
            delivered to the house and its like she knew it was at the
            door. She absolutely hates taking her medicine but she
            truly loves her Mixlab box because it’s so informative,
            quick, easy to order but especially because includes a new
            toy each time! Thank you Mixlab for always taking care of
            her! She can’t wait to place her next order now!”`,
			socialMedia: inst,
			nickName: "Tootsie, CA",
		},
	];

	const slides = slideList.map((slide, i) => (
		<SwiperSlide key={i} className="reviews-slider__item">
			<ReviewsSlidesLayout item={slide} />
		</SwiperSlide>
	));

	return (
		<Swiper className="reviews-slider"
		spaceBetween={80}
		slidesPerView={1.33}
		centeredSlides={true}
		effect={'cards'}
		initialSlide={2}
		loop={true}
		>
			{slides}
		</Swiper>
	);
};
