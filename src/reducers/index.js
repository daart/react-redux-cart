import { combineReducers } from 'redux';

import wareHouseReducer from './wareHouse.reducer';
import cartReducer from './cart.reducer';

const reducer = combineReducers({
	productsByID: wareHouseReducer,
	cart: cartReducer
});

export default reducer;