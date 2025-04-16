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
	const [filterIsVisible, setFilterIsVisible] = useState(window.innerWidth > 1440);

	const isLastPage = totalPages == null || totalPages <= pagination.page;

	const handleLoadMore = () => {
		setPagination(prev => ({ ...prev, page: prev.page + 1 }));
	};

	useEffect(() => {
		dispatch(cleanCampers());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		dispatch(getCampersThunk({ ...pagination, ...queryParams }));
	}, [pagination, queryParams, dispatch]);

	useEffect(() => {
		const handleResize = () => {
			const isLarge = window.innerWidth > 1440;
			setFilterIsVisible(isLarge ? true : false);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isSmallScreen = window.innerWidth <= 1440;

	const handleOpenFilter = () => {
		setFilterIsVisible(!filterIsVisible);
	};

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
		setQueryParams(query);
		dispatch(getFilterCampersThunk({ ...InitialPagination, ...query }));
	};

	return (
		<>
			<Header />
			<div className={s.wrapper}>
				{isSmallScreen && (
					<button onClick={handleOpenFilter} className={s.filterButton} type="button">
						Filter
					</button>
				)}
				{filterIsVisible && (
					<FilterForm pagination={pagination} handleFilterCampers={handleFilterCampers} />
				)}
				<Campers handleLoadMore={handleLoadMore} isLastPage={isLastPage} />
				{isLoading && <Loader />}
			</div>
		</>
	);
};

export default CatalogPage;
