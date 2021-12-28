import "../header.scss";


export const HeaderNavView = ({item}) => {

	const {pathTo, label} = item;

	return (
		<li className="header__nav-li">
			<a className="header__nav-link" href={pathTo}>
				{label}
			</a>
		</li>
	);
};
