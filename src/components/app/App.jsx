import { Route, Routes } from 'react-router';
import React, { Suspense } from 'react';

import HomePage from '../../pages/HomePage/HomePage';
const CatalogPage = React.lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperPage = React.lazy(() => import('../../pages/CamperPage/CamperPage'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

import './App.css';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/catalog/:id" element={<CamperPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
			<Toaster position="top-right" reverseOrder={false} />
		</Suspense>
	);
}

export default App;
