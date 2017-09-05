import { 
	CART_INC, 
	CART_DEC, 
	CART_ADD, 
	CART_REMOVE, 
	CART_CLEAR 
} from '../actions/constants';

const defaultState = {
	items: []
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case CART_ADD:
			{
				let { product, productID } = action.payload;
				console.log(action.payload);
				
				if( !state.items.filter(item => item.id === productID).length ) {

					return {
						...state,
						items: [
							...state.items, 
							{
								id: productID,
								qty: 1
							}
						]
					}
				}

				return {
					...state,
					items: state.items.map(item => (
							item.id === productID ? {...item, qty: item.qty + 1 } : item
					)) 
				}
			}
		case CART_REMOVE:
			{
				let { productID } = action.payload;

				return {
					...state,
					items: state.items.filter(item => item.id !== productID)
				}
			}
		case CART_INC:
			{
				let { itemID } = action.payload;
				
				return {
					...state,
					items: state.items.map(item => (
						item.id === itemID ? {...item, qty: item.qty + 1} : item
					))	
				}
			}
		case CART_DEC:
			{
				let { itemID } = action.payload;

				return {
					...state,
					items: state.items.map(item => (
						item.id === itemID ? {...item, qty: item.qty - 1} : item
					))	
				}
			}
		default:
			return state;
	}
};