import s from './CamperVehicle.module.css';

const CamperVehicle = ({ form, length, width, height, tank, consumption }) => {
	return (
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
	);
};

export default CamperVehicle;
