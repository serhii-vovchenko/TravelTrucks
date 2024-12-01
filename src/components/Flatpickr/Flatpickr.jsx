import s from './Flatpickr.module.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_red.css';
import { useFormikContext } from 'formik';

const FlatpickrComp = ({ field, form, className, ...props }) => {
	const { setFieldValue } = useFormikContext();

	const handleDateChange = selectedDates => {
		setFieldValue(field.name, selectedDates[0]);
	};

	return (
		<Flatpickr
			{...field}
			{...props}
			onChange={handleDateChange}
			value={field.value}
			placeholder="Booking Date*"
		/>
	);
};

export default FlatpickrComp;
