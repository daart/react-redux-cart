import { CART_ADD, CART_REMOVE, CART_INC, CART_DEC } from '../actions/index';

const cart = {
	items: []
};

export default (state = cart, action) => {
	switch(action.type) {
		case CART_ADD :
			
			let { prodID } = action.payload;
			let { qty } = action.payload.product;

			if(!state.items.filter(item => item.id === prodID).length) {

				return {
					...state, 
					items: [
						...state.items, 
						{	 
							id: prodID,
							qty: 1
						}
					]
				}
			} 

			return {
				...state,
				items: state.items.map(item => (
						item.id === prodID ? { ...item, qty: item.qty + 1 } : item
					))
			}

		case CART_REMOVE :
			return {
				...state, 
				items: state.items.filter(item => item.id !== action.payload.item.id )
			}
		case CART_INC :
			return {
				...state,
				items: state.items.map(item => (
					{
						...item, 
						qty: item.id === action.payload.id ? item.qty + 1 : item.qty 
					}
				))	
			}
		case CART_DEC :
			return {
				...state,
				items: state.items.map(item => (
					{
						...item, 
						qty: item.id === action.payload.id ? item.qty - 1 : item.qty 
					}
				))	
			}
		default:
			return state;
	}
}