import "../reviews.scss";

export const ReviewsSlidesLayout = ({ item }) => {
	const { dogPic, text, socialMedia, nickName } = item;

	return (
		<>
			<div className="reviews-slider__item-pic">
				<img src={dogPic} alt="dog" />
			</div>
			<div className="reviews-slider__item-info">
				<div className="reviews-slider__item-text">
					{text}
				</div>
				<div className="reviews-slider__item-media">
					<a href="/">
						<img src={socialMedia} alt="instagram" />
					</a>
					<span>{nickName}</span>
				</div>
			</div>
		</>
	);
};
