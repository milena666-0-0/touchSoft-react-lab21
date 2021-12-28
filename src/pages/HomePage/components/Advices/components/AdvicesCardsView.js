import "../advices.scss";

export const AdvicesCardsView = ({item}) => {

	const {pic, date, title, desc} = item;

	return (
		<div className="advices__card">
			<div className="advices__card-pic">
				<img src={pic} alt="" />
			</div>
			<div className="advices__card-info">
				<div className="advices__card-date">{date}</div>
				<div className="advices__card-title">{title}</div>
				<div className="advices__card-text">
					{desc}
				</div>
				<a className="advices__card-link" href="">
					Read the article
				</a>
			</div>
		</div>
	);
};
