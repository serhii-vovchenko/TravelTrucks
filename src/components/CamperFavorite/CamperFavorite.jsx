import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../img/sprite.svg';
import s from './CamperFavorite.module.css';
import { addToFavorite, deleteFavorite } from '../../redux/slice';
import { favoriteSelect } from '../../redux/selectors';

const CamperFavorite = ({ camper }) => {
	const dispatch = useDispatch();
	const favorite = useSelector(favoriteSelect);

	const isFavorite = favorite?.includes(camper.id);

	console.log('favorite', isFavorite);

	const handleToFavorite = camper => {
		if (isFavorite) {
			dispatch(deleteFavorite(camper.id));
		} else {
			dispatch(addToFavorite(camper.id));
		}
	};

	return (
		<svg
			onClick={() => handleToFavorite(camper)}
			className={`${s.favoriteIcon} ${isFavorite && s.active} `}
			width="26"
			height="24"
		>
			<use href={`${sprite}#icon-favorite`} />
		</svg>
	);
};

export default CamperFavorite;
