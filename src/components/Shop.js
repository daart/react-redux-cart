import React from 'react';
import { connect } from 'react-redux';
import { Table, Grid } from 'semantic-ui-react';

import ShopItem from './ShopItem';
import Totals from './Totals';

const Shop = ({warehouse = {}}) => {
	return (
		<div >
			<h2>Shop!</h2>
			<Grid padded>
				<Grid.Column width={16}>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>ProductID</Table.HeaderCell>
								<Table.HeaderCell>Title</Table.HeaderCell>
								<Table.HeaderCell>Price</Table.HeaderCell>
								<Table.HeaderCell>Quantity</Table.HeaderCell>
								<Table.HeaderCell>Controls</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>

							{
								Object.keys(warehouse).map(productID => (

									<ShopItem 
										key={ productID }
										product={ warehouse[productID] }
										productID={ productID }
									/>
								))
							}
								
						</Table.Body>
					</Table>

				</Grid.Column>
			</Grid>
		</div>
	);
}

let mapStateToProps = (state) => ({
	warehouse: state.warehouse
});

export default connect(mapStateToProps)(Shop);