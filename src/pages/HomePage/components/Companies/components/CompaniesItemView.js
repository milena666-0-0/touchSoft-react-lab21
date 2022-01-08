import "../companies.scss";

export const CompaniesItemView = ({item}) => {

	const {icon, pathTo} = item;

	return (
		<div className="companies__item">
			<a href={pathTo}>
				<img src={icon} alt="logo" />
			</a>
		</div>
	);
};
