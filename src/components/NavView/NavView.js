import {Link} from 'react-router-dom';


export const NavView = ({item, styles}) => {

	const {pathTo, label} = item;

	return (
		<li className="nav__li">
			<Link style={styles} className="nav__link" to={pathTo}>
				{label}
			</Link>
		</li>
	);
};
