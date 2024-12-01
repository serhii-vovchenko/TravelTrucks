import s from './BookingForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import FlatpickrComp from '../Flatpickr/Flatpickr';

const BookingForm = () => {
	const initialValues = {
		name: '',
		email: '',
		bookingDate: '',
		comment: '',
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, 'Minimum 3 characters')
			.max(30, 'Maximum 30 characters')
			.required('Required field'),
		email: Yup.string().email('Invalid email format').required('Required field'),
		bookingDate: Yup.date().required('Please specify your booking date'),
		comment: Yup.string().max(200, 'Maximum 200 characters'),
	});

	const handleSubmit = (values, { resetForm }) => {
		toast.success('Your reservation is confirmed.');
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={s.form}>
					<div className={s.wrapper}>
						<div className={s.inputWrapper}>
							<Field className={s.input} type="text" id="name" name="name" placeholder="Name*" />
							<ErrorMessage name="name" component="div" className={s.error} />
						</div>

						<div className={s.inputWrapper}>
							<Field
								className={s.input}
								type="email"
								id="email"
								name="email"
								placeholder="Email*"
							/>
							<ErrorMessage name="email" component="div" className={s.error} />
						</div>

						<div className={s.inputWrapper}>
							<Field
								name="bookingDate"
								component={FlatpickrComp}
								options={{ enableTime: true, dateFormat: 'd-m-Y' }}
								className={s.input}
							/>
							<ErrorMessage name="bookingDate" component="div" className={s.error} />
						</div>

						<div className={s.inputWrapper}>
							<Field
								className={s.textarea}
								as="textarea"
								id="comment"
								name="comment"
								placeholder="Comment"
							/>
							<ErrorMessage name="comment" component="div" className={s.error} />
						</div>
					</div>

					<button className={s.submitBtn} type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default BookingForm;
