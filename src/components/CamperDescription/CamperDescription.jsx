import s from './CamperDescription.module.css';

const CamperDescription = ({ description, customClass }) => {
	const buildClass = customClass === 'page' ? s.pageText : s.text;

	return <p className={buildClass}>{description}</p>;
};

export default CamperDescription;
