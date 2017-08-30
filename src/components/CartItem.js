import React from 'react';

import { connect } from 'react-redux';
import { cartDec, cartInc, removeFromCart } from '../actions';

const CartItem = ({ productsByID, item, cartInc, cartDec, removeFromCart }) => {
	let { id, qty } = item;

	return (
		<div 
			className="cart_item" 
		>
			<div className="item_info">

				<button 
					type="button"
					disabled={ productsByID[id].qty <= 0 ? true : false }
					onClick={ () => cartInc(id) } 
				>
					+
				</button>
				{ ' ' }
				<strong>{ qty }</strong>
				{ ' ' }
				<button 
					type="button"
					onClick={ () => cartDec(id) }
					disabled={ qty <= 0 ? true : false }
				>
					-
				</button>
				{ ' ' }
				<span>
					{ productsByID[id].title }
				</span>
				{ ' ' }
				 <button 
				 	type="button"
				 	onClick={ () => removeFromCart({ qty, id }) }
			 	>X</button>
			</div>
			
			<div className="item_controls">
	

			</div>

		</div>
	);
}

let mapStateToProps = (currentState) => ({
	productsByID: currentState.productsByID
});

let mapDispatchToProps = (dispatch) => ({
	cartInc(id){
		dispatch(cartInc(id))
	},
	cartDec(id){
		dispatch(cartDec(id))
	},
	removeFromCart(item) {
		dispatch(removeFromCart(item))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);