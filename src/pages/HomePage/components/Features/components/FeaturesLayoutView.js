import '../features.scss';

export const FeaturesLayoutView = ({item}) => {

	const { title, text, isLine } = item;

	const line = isLine ? <div className="features__item-line"></div> : null;

	return (
		<div className="features__item">
			<div className="features__item-title">{title}</div>
			<div className="features__item-info">{text}</div>
			{line}
		</div>
	);
};
