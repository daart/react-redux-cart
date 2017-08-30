import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions';

const Product = ({ product, prodID, addToCart }) => {
	let { title, qty, price } = product;

	return (
		<div className="l_product">
			<div className="product_desc">
				<span>
					itemID: { ' ' } 
					<strong>{ prodID }</strong>
				</span>
				<br/>
				<span>
					title: { ' ' } 
					{ title }
				</span>
				<br/>
				<span> 
					qty: { ' ' } 
					<strong>{ qty }</strong>
				</span>
			</div>
			{ ' ' }
			<button 
				type="button" 
				disabled={ qty <= 0 ? true : false }
				onClick={ () => {
					addToCart({ product, prodID })
				} }
			>
				Add to cart
			</button>
			{ ' ' }
			<strong>
				{ '$' + price }
			</strong>
		</div>
	)
};

let mapDispatchToProps = (dispatch) => ({
	addToCart({ product, prodID }){
		dispatch(addToCart({ product, prodID }))
	}
});

export default connect(null, mapDispatchToProps)(Product);