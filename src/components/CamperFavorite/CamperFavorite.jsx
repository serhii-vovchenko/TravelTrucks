import sprite from '../../img/sprite.svg';
import s from './CamperFavorite.module.css';

const CamperFavorite = () => {
	return (
		<svg className={s.favoriteIcon} width="26" height="24">
			<use href={`${sprite}#icon-favorite`} />
		</svg>
	);
};

export default CamperFavorite;
