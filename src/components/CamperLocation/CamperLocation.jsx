import sprite from '../../img/sprite.svg';
import s from './CamperLocation.module.css';

const CamperLocation = ({ location }) => {
	return (
		<div className={s.wrapper}>
			<svg className={s.locationIcon} width="16" height="16">
				<use href={`${sprite}#icon-map`} />
			</svg>
			<p>{location}</p>
		</div>
	);
};

export default CamperLocation;
