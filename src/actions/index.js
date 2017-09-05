import { 
	CREATE_NEW, 
	CART_ADD, 
	CART_REMOVE, 
	CART_INC,
	CART_DEC,
	CART_CLEAR,
	DELETE_PROD
} from './constants';

export const addToCart = ({product, productID}) => ({
	type: CART_ADD,
	payload: {
		product,
		productID
	}
})

export const removeFromCart = ({ productID, qty }) => ({
	type: CART_REMOVE,
	payload: {
		productID,
		qty
	}
})

export const incItemQty = (itemID) => ({
	type: CART_INC,
	payload: {
		itemID
	}
})

export const decItemQty = (itemID) => ({
	type: CART_DEC,
	payload: {
		itemID
	}
})

export const createNew = (formData) => ({
	type: CREATE_NEW,
	payload: formData
})

export const deleteProduct = (productID) => ({
	type: DELETE_PROD,
	payload: {
		productID
	}
})