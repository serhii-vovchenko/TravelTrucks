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

const CamperPage = () => {
	const camper = useSelector(camperPageSelect);

	if (!camper) {
		return <p>Loading camper data...</p>;
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
					<p>Features</p>
					<p>Reviews</p>
				</div>
				<div className={s.detailsWrapper}>
					<div className={s.firstColumn}>
						<CamperConfiguration engine={engine} transmission={transmission} camper={camper} />

						<div className={s.vehicleWrapper}>
							<h3 className={s.subtitle}>Vehicle details</h3>

							<ul className={s.vehicleList}>
								<li className={s.vehicleItem}>
									<p className={s.itemText}>Form</p>
									<p className={s.itemText}>{form}</p>
								</li>
								<li className={s.vehicleItem}>
									<p className={s.itemText}>Length</p>
									<p className={s.itemText}>{length}</p>
								</li>
								<li className={s.vehicleItem}>
									<p className={s.itemText}>Width</p>
									<p className={s.itemText}>{width}</p>
								</li>
								<li className={s.vehicleItem}>
									<p className={s.itemText}>Height</p>
									<p className={s.itemText}>{height}</p>
								</li>
								<li className={s.vehicleItem}>
									<p className={s.itemText}>Tank</p>
									<p className={s.itemText}>{tank}</p>
								</li>
								<li className={s.vehicleItem}>
									<p className={s.itemText}>Consumption</p>
									<p className={s.itemText}>{consumption}</p>
								</li>
							</ul>
						</div>
					</div>
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
