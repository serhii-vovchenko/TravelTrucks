// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './components/app/App';

import './index.css';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>
);
