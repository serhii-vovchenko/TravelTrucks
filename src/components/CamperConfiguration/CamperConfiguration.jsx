import sprite from '../../img/sprite.svg';

import s from './CamperConfiguration.module.css';

const CamperConfiguration = ({ camper, transmission, engine }) => {
	const configuration = Object.keys(camper).filter(key => camper[key] === true);
	const allConfiguration = [transmission, engine, ...configuration];

	const icons = {
		kitchen: 'cup',
		automatic: 'diagram',
		manual: 'diagram',
		TV: 'tv',
		AC: 'wind',
		radio: 'radios',
		diesel: 'engines',
		petrol: 'engines',
		hybrid: 'engines',
		refrigerator: 'fridge',
		bathroom: 'shower',
		microwave: 'microwave',
		gas: 'gas',
		water: 'water',
	};

	return (
		<ul className={s.listItems}>
			{allConfiguration?.map((configuration, index) => {
				return (
					<li key={index} className={s.item}>
						<svg className={s.configIcon} width="20" height="20">
							<use href={`${sprite}#icon-${icons[configuration]}`} />
						</svg>
						<p className={s.text}>{configuration}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default CamperConfiguration;
