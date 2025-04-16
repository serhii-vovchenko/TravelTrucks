import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.wrapper}>
			<div className={s.headerContainer}>
				<Logo />
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
