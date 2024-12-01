import s from './ConfigurationFilter.module.css';
import { Field } from 'formik';
import sprite from '../../../img/sprite.svg';

const ConfigurationFilter = ({ campers }) => {
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
