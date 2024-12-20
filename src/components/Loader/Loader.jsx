import s from './Loader.module.css';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className={s.wrapper}>
			<ColorRing
				visible={true}
				height="100"
				width="100"
				ariaLabel="color-ring-loading"
				wrapperStyle={{}}
				wrapperClass="color-ring-wrapper"
				colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
			/>
		</div>
	);
};

export default Loader;
