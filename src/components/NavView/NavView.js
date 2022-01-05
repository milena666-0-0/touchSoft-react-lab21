
export const NavView = ({item, styles}) => {

	const {pathTo, label} = item;

	return (
		<li className="nav__li">
			<a style={styles} className="nav__link" href={pathTo}>
				{label}
			</a>
		</li>
	);
};
