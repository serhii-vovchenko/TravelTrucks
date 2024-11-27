import s from './CamperDescription.module.css';

const CamperDescription = ({ description }) => {
	return <p className={s.text}>{description}</p>;
};

export default CamperDescription;
