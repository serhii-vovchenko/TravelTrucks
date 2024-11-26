import { NavLink } from 'react-router';
import sprite from '../../../img/sprite.svg';
import s from './Logo.module.css';

const Logo = () => {
	return (
		<NavLink to="/" className={s.wrapper}>
			<svg className={s.logoIcon} width="136" height="16">
				<use href={`${sprite}#icon-logo`} />
			</svg>
		</NavLink>
	);
};

export default Logo;
