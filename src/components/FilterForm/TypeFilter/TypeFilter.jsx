import s from './TypeFilter.module.css';
import { Field } from 'formik';
import sprite from '../../../img/sprite.svg';

const TypeFilter = () => {
	const types = ['van', 'fullyIntegrated', 'alcove'];
	const icons = {
		van: 'van',
		fullyIntegrated: 'fullyIntegrated',
		alcove: 'alcove',
	};

	return (
		<div className={s.wrapper}>
			<label className={s.label}>Vehicle type</label>
			<ul className={s.typeList}>
				{types.map(type => (
					<li key={type}>
						<label className={s.typeItem}>
							<Field type="radio" name="form" value={type} className={s.radioBtn} />

							<svg className={s.typeIcon} width="32" height="32">
								<use href={`${sprite}#icon-${icons[type]}`} />
							</svg>
							<p className={s.text}>{type === 'fullyIntegrated' ? 'fully Integrated' : type}</p>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TypeFilter;
