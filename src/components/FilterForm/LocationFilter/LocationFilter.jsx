import s from './LocationFilter.module.css';
import { Field } from 'formik';
import sprite from '../../../img/sprite.svg';

const LocationFilter = ({ campers }) => {
	const locations = [
		'Ukraine, Kyiv',
		'Ukraine, Poltava',
		'Ukraine, Dnipro',
		'Ukraine, Odesa',
		'Ukraine, Kharkiv',
		'Ukraine, Sumy',
		'Ukraine, Lviv',
	];

	return (
		<div className={s.wrapper}>
			<label className={s.label}>Location</label>
			<svg className={s.locationIcon} width="20" height="20">
				<use href={`${sprite}#icon-map`} />
			</svg>
			<Field className={s.input} as="select" name="location">
				<option value="">City</option>

				{locations?.map(location => (
					<option key={location} value={location}>
						{location}
					</option>
				))}
			</Field>
		</div>
	);
};

export default LocationFilter;
