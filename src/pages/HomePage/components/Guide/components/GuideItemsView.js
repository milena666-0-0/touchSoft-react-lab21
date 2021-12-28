import '../guide.scss';

export const GuideItemsView = ({item}) => {

	const { pic, title, info } = item;

	return (
		<div className="guide__item">
			<img className="guide__item-pic" src={pic} alt="" />
			<div className="guide__item-title">{title}</div>
			<div className="guide__item-desc">{info}</div>
		</div>
	);
};

