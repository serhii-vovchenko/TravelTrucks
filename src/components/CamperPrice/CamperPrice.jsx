import s from './CamperPrice.module.css';

const CamperPrice = ({ price }) => {
	return <p className={s.price}>{`€${price}.00`}</p>;
};

export default CamperPrice;
