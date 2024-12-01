import s from './ConfigurationFilter.module.css';
import { Field } from 'formik';
import sprite from '../../../img/sprite.svg';
// import { useState } from 'react';

const ConfigurationFilter = ({ campers }) => {
	// const [isChecked, setIsChecked] = useState(false);

	// const getUniqueConfigurations = campers => {
	// 	const allConfigurations = campers?.flatMap(camper => {
	// 		const configuration = Object.keys(camper).filter(key => camper[key] === true);
	// 		return [camper.transmission, camper.engine, ...configuration];
	// 	});
	// 	return [...new Set(allConfigurations)];
	// };

	// const uniqueConfigurations = getUniqueConfigurations(campers);
	const uniqueConfigurations = [
		'AC',
		'kitchen',
		'refrigerator',
		'microwave',
		'gas',
		'water',
		'bathroom',
		'TV',
		'radio',
	];

	const icons = {
		kitchen: 'cup',
		TV: 'tv',
		AC: 'wind',
		radio: 'radios',
		refrigerator: 'fridge',
		bathroom: 'shower',
		microwave: 'microwave',
		gas: 'gas',
		water: 'water',
	};

	return (
		<div className={s.wrapper}>
			<p className={s.title}>Filters</p>
			<label className={s.label}>Vehicle equipment</label>

			<ul className={s.configList}>
				{uniqueConfigurations?.map(configuration => (
					<li key={configuration}>
						<label className={s.configItem}>
							<Field
								className={s.checkbox}
								type="checkbox"
								name="configurations"
								value={configuration}
							/>
							<svg className={s.configIcon} width="32" height="32">
								<use href={`${sprite}#icon-${icons[configuration]}`} />
							</svg>
							<p className={s.text}>{configuration}</p>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ConfigurationFilter;
