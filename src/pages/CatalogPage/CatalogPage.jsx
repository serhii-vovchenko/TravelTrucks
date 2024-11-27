import { useEffect } from 'react';
import { getAllCampersThunk } from '../../redux/operations';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import Campers from '../../components/Campers/Campers';
import Filter from '../../components/Filter/Filter';

import s from './CatalogPage.module.css';

const CatalogPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCampersThunk());
	}, []);

	return (
		<>
			<Header />
			<div className={s.wrapper}>
				<Filter />
				<Campers />
			</div>
		</>
	);
};

export default CatalogPage;
