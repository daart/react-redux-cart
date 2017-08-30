import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
 
import Root from './components/Root';
import store from './store';

const el = document.getElementById('root');

window.store = store;

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	el
)