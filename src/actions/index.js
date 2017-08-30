/*
 * action types
 */
export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE';
export const CART_INC = 'CART_INC';
export const CART_DEC = 'CART_DEC';
export const CART_CLEAR = 'CART_CLEAR';
export const CART_CREATE_NEW = 'CART_CREATE_NEW';

export const addToCart = ({product, prodID}) => {
	return {
		type: CART_ADD,
		payload: {
			product,
			prodID
		}
	}
}

export const removeFromCart = (item) => {
	return {
		type: CART_REMOVE,
		payload: {
			item
		}
	}
}

export const cartInc = (id) => {
	return {
		type: CART_INC,
		payload: {
			id
		}
	}
}

export const cartDec = (id) => {
	return {
		type: CART_DEC,
		payload: {
			id
		}
	}
}

export const cartClear = () => {
	return {
		type: CART_CLEAR
	}
}

export const addToWarehouse = (formData) => {
	return {
		type: CART_CREATE_NEW,
		payload: {
			formData
		}
	}
}



