import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { addToCart } from '../actions';

import './ProductList.css';

const ProductList = ({ productsByID = {}, cartIDs}) => {
	return (
		<div className="product_list">
			<h3>On a Warehouse :</h3>
			<ul>
				{ Object.keys(productsByID).map((productID) => (
						<li 
							key={ productID }
							className="product_info"
						>
							<Product 
								product={ productsByID[productID] }
								prodID={ productID }
							/>

						</li>
					)
				)}
			</ul>
		</div>
	)
}

let stateToProps = (currentState) => ({
	productsByID: currentState.productsByID,
	cartIDs: currentState.cart.items.map(item => item.id)
});

// let dispatchToProps = (dispatch) => ({
// 	addToCart(id){
// 		dispatch(addToCart(id))
// 	}
// });

export default connect(stateToProps)(ProductList);