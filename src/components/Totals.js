import React from 'react';
import { connect } from 'react-redux';

import './Totals.css';

const Totals = ({ items, productsByID }) => {
	// console.log(productsByID);

	let totals = items.reduce((prev, next) => (
		// console.log('prev : ', prev, ' ', ' next : ', next)
		{
			...prev, 
			price: prev.price + (productsByID[next.id].price * next.qty), 
			qty: prev.qty + next.qty 
		}
	), { price: 0, qty: 0 })

	return (
		<div className="totals_wrapper">
			<div 
				className="proucts_total"
			>
				<span>Total Price : </span>
				{ ' '}
				<strong>{ '$' + totals.price.toFixed(2) }</strong>
			</div>

			<div 
				className="products_price"
			>
				<span>Total Items : </span>
				{ ' '}
				<strong>{ totals.qty }</strong>
			</div>
		</div>
	)
}

let mapStateToProps = (currentState) => ({
	productsByID: currentState.productsByID
})

export default connect(mapStateToProps)(Totals);