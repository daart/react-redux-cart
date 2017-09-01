import { combineReducers } from 'redux';

import cart from './cart';
import warehouse from './warehouse';

let reducer = combineReducers({
	cart,
	warehouse
});

export default reducer;