import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import CartItem from './CartItem';

const Checkout = ({ warehouse, items }) => {
	return (
		<div>
			<Table celled padded>
				<Table.Body>

					{ items.map(item => (
						<CartItem 
							key={ item.id }
							item={ item } 
							// productID={ item.id }
						/>
					)) }
				</Table.Body>
			</Table>
		</div>
	)
}

let mapStateToProps = (state) => ({
	warehouse: state.warehouse,
	items: state.cart.items
});

export default connect(mapStateToProps)(Checkout);