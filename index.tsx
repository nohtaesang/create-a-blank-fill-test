import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './src/app';
import { Provider } from 'react-redux';
import store from './src/ts/redux/store/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
