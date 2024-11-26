import { useNavigate } from 'react-router';
import s from './Hero.module.css';

const Hero = () => {
	const navigate = useNavigate();

	const handleViewNow = () => {
		navigate('/catalog');
	};

	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>Campers of your dreams</h1>
			<h2 className={s.text}>You can find everything you want in our catalog</h2>
			<button onClick={handleViewNow} className={s.button} type="button">
				View Now
			</button>
		</div>
	);
};

export default Hero;
