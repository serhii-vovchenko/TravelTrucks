import s from './Rating.module.css';
import sprite from '../../../img/sprite.svg';

const Rating = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (_, index) => index + 1);

	return (
		<div className="wrapper">
			{stars.map(star => (
				<svg
					key={star}
					className={`${s.ratingIcon} ${star > rating && s.ratingIconClean}`}
					width="16"
					height="16"
				>
					<use href={`${sprite}#icon-rating`} />
				</svg>
			))}
		</div>
	);
};

export default Rating;
