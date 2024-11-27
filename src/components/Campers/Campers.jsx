import { useSelector } from 'react-redux';
import s from './Campers.module.css';
import { campersSelect, loadingSelect } from '../../redux/selectors';
import CamperTitle from '../CamperTitle/CamperTitle';
import CamperPrice from '../CamperPrice/CamperPrice';
import CamperFavorite from '../CamperFavorite/CamperFavorite';
import CamperRating from '../CamperRating/CamperRating';
import CamperLocation from '../CamperLocation/CamperLocation';
import CamperPhoto from '../CamperPhoto/CamperPhoto';
import CamperDescription from '../CamperDescription/CamperDescription';
import CamperConfiguration from '../CamperConfiguration/CamperConfiguration';

const Campers = () => {
	const isLoading = useSelector(loadingSelect);
	const campers = useSelector(campersSelect);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	console.log('campers: ', campers);

	return (
		<div className={s.wrapper}>
			<ul className={s.campersList}>
				{campers?.map(camper => {
					const {
						id,
						gallery,
						name,
						price,
						rating,
						reviews,
						location,
						description,
						transmission,
						engine,
					} = camper;
					return (
						<li className={s.item} key={id}>
							<CamperPhoto gallery={gallery} name={name} />

							<div className={s.detailsWrapper}>
								<div className={s.firstGroupe}>
									<div className={s.titleBox}>
										<CamperTitle name={name} />
										<div className={s.priceBox}>
											<CamperPrice price={price} />
											<CamperFavorite camper={camper} />
										</div>
									</div>

									<div className={s.ratingBox}>
										<CamperRating rating={rating} reviews={reviews} />
										<CamperLocation location={location} />
									</div>
								</div>
								<CamperDescription description={description} />
								<CamperConfiguration camper={camper} transmission={transmission} engine={engine} />
								<button className={s.showMoreBtn} type="button">
									Show more
								</button>
							</div>
						</li>
					);
				})}
			</ul>
			<button type="button" className={s.loadMoreBtn}>
				Load more
			</button>
		</div>
	);
};

export default Campers;
