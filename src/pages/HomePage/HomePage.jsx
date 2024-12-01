import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import s from './HomePage.module.css';
import { useEffect } from 'react';
import { cleanCampers } from '../../redux/slice';

const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(cleanCampers());
	}, []);

	return (
		<div className={s.wrapper}>
			<Header />
			<Hero />
		</div>
	);
};

export default HomePage;
