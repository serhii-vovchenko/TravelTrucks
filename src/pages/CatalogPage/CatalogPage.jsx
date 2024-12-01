import Header from '../../components/Header/Header';
import Campers from '../../components/Campers/Campers';
import FilterForm from '../../components/FilterForm/FilterForm';

import s from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCampersThunk, getFilterCampersThunk } from '../../redux/operations';
import { cleanCampers } from '../../redux/slice';
import { loadingSelect, totalCampersSelect } from '../../redux/selectors';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(loadingSelect);
	const totalTracks = useSelector(totalCampersSelect);
	const totalPages = Math.ceil(totalTracks / 4);

	const InitialPagination = { page: 1, limit: 4 };
	const [pagination, setPagination] = useState(InitialPagination);
	const [queryParams, setQueryParams] = useState();

	const isLastPage = totalPages === pagination.page;

	const handleLoadMore = () => {
		setPagination(prev => ({ ...prev, page: prev.page + 1 }));
	};

	useEffect(() => {
		dispatch(cleanCampers());
	}, []);

	useEffect(() => {
		dispatch(getCampersThunk({ ...pagination, ...queryParams }));
	}, [pagination]);

	const handleFilterCampers = values => {
		const configurations = values.configurations.reduce((acc, config) => {
			acc[config] = true;
			return acc;
		}, {});

		const query = {
			...(values.location && { location: values.location }),
			...(values.form && { form: values.form }),
			...configurations,
		};

		dispatch(cleanCampers());
		setPagination(InitialPagination);
		setQueryParams(query);

		dispatch(getFilterCampersThunk({ ...pagination, ...query }));
	};

	return (
		<>
			<Header />
			<div className={s.wrapper}>
				<FilterForm pagination={pagination} handleFilterCampers={handleFilterCampers} />
				<Campers handleLoadMore={handleLoadMore} isLastPage={isLastPage} />
				{isLoading && <Loader />}
			</div>
		</>
	);
};

export default CatalogPage;
