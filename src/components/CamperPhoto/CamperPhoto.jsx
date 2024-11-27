import s from './CamperPhoto.module.css';

const CamperPhoto = ({ gallery, name }) => {
	return <img className={s.image} src={gallery[0]?.thumb} alt={name} width="292" height="320" />;
};

export default CamperPhoto;
