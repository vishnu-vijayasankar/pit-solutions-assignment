import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/simple-line-icons.css';
import './assets/css/themify-icons.css';
import './assets/css/set1.css';
import './assets/css/style.css'



// integrate redux
import { Provider } from 'react-redux';
import { store } from './helpers';


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();
