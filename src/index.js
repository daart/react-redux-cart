import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import store from './store';
import Root from './components/Root';

const el = document.getElementById('root');

// render(
// 	<Provider 
// 		store={store}
// 	>
// 		<Root />
// 	</Provider>,
// 	el
// );

render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>,
	el
);

