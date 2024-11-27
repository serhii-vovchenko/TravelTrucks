import sprite from '../../img/sprite.svg';
import s from './CamperRating.module.css';

const CamperRating = ({ rating, reviews = [] }) => {
	const calcReviews = reviews?.length;

	return (
		<div className={s.wrapper}>
			<svg className={s.ratingIcon} width="16" height="16">
				<use href={`${sprite}#icon-rating`} />
			</svg>
			<p className={s.text}>{`${rating} (${calcReviews} Reviews)`}</p>
		</div>
	);
};

export default CamperRating;
