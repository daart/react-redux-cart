import { CART_ADD, CART_REMOVE, CREATE_NEW, CART_INC, CART_DEC, DELETE_PROD } from '../actions/constants';

const defaultState = {
	[(Math.random() * 10).toPrecision(5)]: {
		title: '42" Samsung smart TV',
		qty: 12,
		price: 455.99
	},
	[(Math.random() * 10).toPrecision(5)]: {
		title: '13" macbook Pro (retina 2017)',
		qty: 5,
		price: 1399.76
	},
	[(Math.random() * 10).toPrecision(5)]: {
		title: 'MSI gForce gt980ti',
		qty: 19,
		price: 998.85
	},
	[(Math.random() * 10).toPrecision(5)]: {
		title: 'Phillips headphones z465',
		qty: 23,
		price: 55.88
	}
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case CART_ADD:
			{
				let { product, productID } = action.payload;

				return {
					...state,
					[productID]: {...state[productID], qty: state[productID].qty - 1 }
				}	
			}
		case CART_REMOVE: 
			{
				let { qty, productID } = action.payload;

				return {
					...state,
					[productID]: {...state[productID], qty: state[productID].qty + qty }
				}
			}
		case CREATE_NEW:
			{	
				let { title, qty, price } = action.payload;

				return {
					...state,
					[(Math.random() * 10).toPrecision(5)]: { title, price, qty }
			}}
		case CART_INC:
			{
				let { itemID } = action.payload;

				return {
					...state,
					[itemID]: {...state[itemID], qty: state[itemID].qty - 1 }
				}
			}
		case CART_DEC:
			{
				let { itemID } = action.payload;

				return {
					...state,
					[itemID]: {...state[itemID], qty: state[itemID].qty + 1 }
				}
			}
		// case DELETE_PROD:
		// 	{
		// 		let { productID } = action.payload;

		// 		return Object.assign({}, Object.keys(state).reduce((prev, next) => (
		// 				next !== productID ? {...prev, [next]: state[next]} : prev	
		// 			), {})
		// 		)
		// 	}
		default:
			return state;
	}
}