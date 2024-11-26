import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import s from './HomePage.module.css';

const HomePage = () => {
	return (
		<div className={s.wrapper}>
			<Header />
			<Hero />
		</div>
	);
};

export default HomePage;
