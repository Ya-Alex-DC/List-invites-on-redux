import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './components/store';
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found in HTML');

const root = ReactDOM.createRoot(rootElement);
root.render(
	<Provider store={store}>
		<App />
	</Provider>

);
