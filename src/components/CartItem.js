import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon, Segment } from 'semantic-ui-react';

import { removeFromCart, incItemQty, decItemQty , warehouse } from '../actions';

const CartItem = ({ warehouse, removeFromCart, incItemQty, decItemQty, item }) => {
	let { qty, id } = item;

	return (
		<Table.Row>
			<Table.Cell>
				{ warehouse[id].title }
			</Table.Cell>
			<Table.Cell textAlign="center">
				<Segment.Group horizontal>
					<Segment compact>
						<Button
							disabled={ warehouse[id].qty < 1 ? true : false }
							onClick={ () => incItemQty(id)} 
							size="mini"
						>
							<Button.Content>
								<Icon name="add"></Icon>
							</Button.Content>
						</Button>
					</Segment>
					<Segment compact>
						{ qty }
					</Segment>
					<Segment compact>
						<Button
							disabled={ qty < 2 ? true : false }
							onClick={ () => decItemQty(id)} 
							size="mini"
						>
							<Button.Content>
								<Icon name="minus"></Icon>
							</Button.Content>
						</Button>
					</Segment>
				</Segment.Group>
			</Table.Cell>
			<Table.Cell textAlign="center">
				<Button 
					onClick={ () => removeFromCart({ productID: id, qty }) }
					inverted 
					color="red" 
					size="small"
				>
					<Button.Content>
						<Icon name="remove"></Icon>
					</Button.Content>
				</Button>
			</Table.Cell>
		</Table.Row>
	);	
}

let mapStateToProps = (state) => ({
	warehouse: state.warehouse
});

let mapDispatchToProps = (dispatch) => ({
	removeFromCart({ productID, qty }){
		dispatch(removeFromCart({ productID, qty }))
	},

	incItemQty(productID) {
		dispatch(incItemQty(productID))	
	},

	decItemQty(productID) {
		dispatch(decItemQty(productID))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);