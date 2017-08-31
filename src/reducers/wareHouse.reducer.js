import { CART_ADD, CART_REMOVE, CART_INC, CART_DEC, CART_CLEAR, CART_CREATE_NEW } from '../actions/index';

const productsByID = {
	[(Math.random() * 10).toPrecision(5)]: {
		title: "item 1",
		qty: 10,
		price: 999.98
	},

	[(Math.random() * 10).toPrecision(5)]: {
		title: "item 2",
		qty: 5,
		price: 457.98
	},

	[(Math.random() * 10).toPrecision(5)]: {
		title: "item 3",
		qty: 3,
		price: 56.39
	}
};

export default (state = productsByID, action) => {
	switch(action.type) {
		case CART_ADD:
			{
				let { prodID } = action.payload;
				let { qty } = action.payload.product;

				if(!state[prodID]) return state 

				return {
					...state,
					[prodID]: {
						...state[prodID], 
						qty: state[prodID].qty - 1
					} 
				}
			}
		case CART_REMOVE:
			{
				let { id, qty } = action.payload.item;

				console.log('warehouse : ', action.payload, ' ', 'qty : ', qty);
				
				if(!state[id]) return state 

				return {
					...state,
					[id]: {
						...state[id], 
						qty: state[id].qty + qty
					} 
				}
			}
		case CART_INC:
			{
				let { id } = action.payload;
				
				if(!state[id]) return state 

				return {
					...state,
					[id]: {
						...state[id], 
						qty: state[id].qty - 1
					} 
				}
			}
		case CART_DEC:
			{
				let { id } = action.payload;
				
				if(!state[id]) return state 

				return {
					...state,
					[id]: {
						...state[id], 
						qty: state[id].qty + 1
					} 
				}
			}
		case CART_CREATE_NEW:
			{
				let { price, qty, title } = action.payload.formData;

				return {
					...state,
					[(Math.random() * 10).toPrecision(5)]: {
						title,
						qty, 
						price
					}
				}
			}
		default:
			return state;
	}
}