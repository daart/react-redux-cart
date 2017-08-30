import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cartInc, cartDec } from '../actions';

import CartItem from './CartItem';
import Totals from './Totals';

import './Cart.css';

const Cart = ({ items }) => {
	return (
		<div className="cart_list">
			<h3>Shopping Cart: </h3>
			{ items.map(({id, qty}) => (
				<CartItem
					key={ id } 
					item={{id, qty}}
				/>
			)) }

			{ items.length > 0 && (
				<Totals 
					items={ items }
				/>
			)}
			
		</div>
	)
}

let mapStateToProps = (currentState) => ({
	items: currentState.cart.items
})

export default connect(mapStateToProps)(Cart);