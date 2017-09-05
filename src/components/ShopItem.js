import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { addToCart, deleteProduct } from '../actions';

const ShopItem = ({ product, productID, addToCart, deleteProduct }) => {
	let { title, price, qty } = product;

	return (
		<Table.Row>
			<Table.Cell>
				{ productID }
			</Table.Cell>
			<Table.Cell>
				<Link to={`/shop/${productID}`} >
					{ title }
				</Link>
			</Table.Cell>
			<Table.Cell>
				{ '$ ' + price }
			</Table.Cell>
			<Table.Cell textAlign="center">
				{ qty }
			</Table.Cell>
			<Table.Cell textAlign="center">
				<Button 
					disabled={ product.qty < 1 ? true : false }
					onClick={ () => addToCart({ product, productID }) }
					animated='vertical'
					color="green"
				>
					<Button.Content hidden>Shop</Button.Content>
					<Button.Content visible>
						<Icon name='shop' />
					</Button.Content>
				</Button>
				<Button
					animated='vertical'
					color="red" 
				>
					<Button.Content hidden>Delete</Button.Content>
					<Button.Content visible>
						<Icon name='delete' />
					</Button.Content>
				</Button>
			</Table.Cell>
		</Table.Row>
	);	
};

let mapDispatchToProps = (dispatch) => ({
	addToCart(product) {
		dispatch(addToCart(product))
	},
	deleteProduct(productID) {
		dispatch(deleteProduct(productID))
	}
});

export default connect(null, mapDispatchToProps)(ShopItem);