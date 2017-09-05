import React from 'react';
import { connect } from 'react-redux';
import { Segment, Statistic } from 'semantic-ui-react';

const Totals = ({ cart, warehouse }) => {
	let totals = cart.items.reduce((prev, next) => (
		{...prev, price: prev.price + (warehouse[next.id].price * next.qty), qty: prev.qty + next.qty }
	), { price: 0, qty: 0 });
	
	let statistics = [
		{
			label: 'Total Cost',
			value: '$'+ totals.price.toFixed(2)
		},
		{
			label: 'Totla Items',
			value: totals.qty
		}
	];
	
	return (
		<Segment>
			<Statistic.Group horizontal items={statistics}/>
		</Segment>
	)
};

let mapStateToProps = (state) => ({
	cart: state.cart,
	warehouse: state.warehouse
});

export default connect(mapStateToProps)(Totals);