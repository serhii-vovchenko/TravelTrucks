import s from './FilterForm.module.css';

import { Formik, Form } from 'formik';
import LocationFilter from './LocationFilter/LocationFilter';
import ConfigurationFilter from './ConfigurationFilter/ConfigurationFilter';
import TypeFilter from './TypeFilter/TypeFilter';

const FilterForm = ({ pagination, handleFilterCampers }) => {
	const handleSubmit = (values, { resetForm }) => {
		handleFilterCampers(values);
		resetForm();
	};

	return (
		<Formik
			initialValues={{
				location: '',
				configurations: [],
				form: '',
			}}
			onSubmit={(values, { resetForm }) => {
				handleSubmit(values, { resetForm });
			}}
		>
			<Form className={s.wrapper}>
				<LocationFilter />
				<div>
					<ConfigurationFilter />
					<TypeFilter />
				</div>
				<button className={s.sendBtn} type="submit">
					Send
				</button>
			</Form>
		</Formik>
	);
};

export default FilterForm;
