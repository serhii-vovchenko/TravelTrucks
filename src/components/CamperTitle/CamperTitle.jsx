import s from './CamperTitle.module.css';

const CamperTitle = ({ name }) => {
	return <h2 className={s.title}>{name}</h2>;
};

export default CamperTitle;
