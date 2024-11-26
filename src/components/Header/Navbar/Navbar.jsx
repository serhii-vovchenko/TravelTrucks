import clsx from 'clsx';
import { NavLink } from 'react-router';
import s from './Navbar.module.css';

const Navbar = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(s.link, isActive && s.active);
	};

	return (
		<nav>
			<ul className={s.listItems}>
				<li>
					<NavLink to="/" className={buildLinkClass}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/catalog" className={buildLinkClass}>
						Catalog
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
