import { useSelector } from 'react-redux';
import CamperTitle from '../../components/CamperTitle/CamperTitle';
import Header from '../../components/Header/Header';
import s from './CamperPage.module.css';
import { camperPageSelect } from '../../redux/selectors';
import CamperRating from '../../components/CamperRating/CamperRating';
import CamperLocation from '../../components/CamperLocation/CamperLocation';
import CamperPrice from '../../components/CamperPrice/CamperPrice';
import CamperPhoto from '../../components/CamperPhoto/CamperPhoto';
import CamperDescription from '../../components/CamperDescription/CamperDescription';
import CamperConfiguration from '../../components/CamperConfiguration/CamperConfiguration';
import BookingForm from '../../components/BookingForm/BookingForm';
import Loader from '../../components/Loader/Loader';
import CamperVehicle from '../../components/CamperVehicle/CamperVehicle';
import { useState } from 'react';
import CamperReviews from '../../components/CamperReviews/CamperReviews';

const CamperPage = () => {
	const camper = useSelector(camperPageSelect);
	const [features, setFeatures] = useState(true);

	const handleClickToFeatures = () => {
		setFeatures(!features);
	};

	if (!camper) {
		return <Loader />;
	}

	const {
		name,
		rating,
		reviews,
		location,
		price,
		gallery,
		description,
		transmission,
		engine,
		form,
		length,
		width,
		height,
		tank,
		consumption,
	} = camper;

	return (
		<>
			<Header />
			<div className={s.wrapper}>
				<div className={s.infoWrapper}>
					<CamperTitle name={name} />
					<div className={s.ratingWrapper}>
						<CamperRating rating={rating} reviews={reviews} />
						<CamperLocation location={location} />
					</div>
					<CamperPrice price={price} />
				</div>

				<div className={s.galleryWrapper}>
					{gallery?.map((photo, index) => {
						return <CamperPhoto key={index} gallery={photo} name={name} />;
					})}
				</div>
				<CamperDescription description={description} customClass={'page'} />

				<div className={s.lastWrapper}>
					<p
						onClick={handleClickToFeatures}
						className={`${s.options} ${features && s.activeOptions}`}
					>
						Features
					</p>
					<p
						onClick={handleClickToFeatures}
						className={`${s.options} ${!features && s.activeOptions}`}
					>
						Reviews
					</p>
				</div>
				<div className={s.detailsWrapper}>
					{features ? (
						<div className={s.firstColumn}>
							<CamperConfiguration engine={engine} transmission={transmission} camper={camper} />
							<CamperVehicle
								form={form}
								length={length}
								width={width}
								height={height}
								tank={tank}
								consumption={consumption}
							/>
						</div>
					) : (
						<CamperReviews reviews={reviews} />
					)}

					<div className={s.secondColumn}>
						<h3 className={s.subtitle}>Book your campervan now</h3>
						<p className={s.formText}>Stay connected! We are always ready to help you.</p>
						<BookingForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default CamperPage;
