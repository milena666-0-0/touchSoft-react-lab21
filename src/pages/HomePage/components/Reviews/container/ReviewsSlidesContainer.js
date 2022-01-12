import { Swiper, SwiperSlide } from "swiper/react";

import { ReviewsSlidesLayout } from "../components/ReviewsSlidesLayout";
import { slideList } from "../config/reviewsSlidesData";

import "swiper/css";
import "../reviews.scss";

export const ReviewSlidesContainer = () => {
	
	return (
		<Swiper
			className="reviews-slider"
			spaceBetween={80}
			slidesPerView={1.33}
			centeredSlides={true}
			effect={"cards"}
			initialSlide={2}
			loop={true}
		>
			{slideList.map((slide, i) => (
				<SwiperSlide key={i} className="reviews-slider__item">
					<ReviewsSlidesLayout item={slide} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
