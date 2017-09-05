import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';
import AddNewProduct from './AddNewProduct';
import Totals from './Totals';
import Product from './Product';

const Main = () => {
	return (
		<Grid>
			<Grid.Column width={16}>

				<Switch>
					<Route 
						exact 
						path="/" 
						component={ Home } 
					/>

					<Route 
						path="/checkout"
						component={ Checkout }
					/>

					<Route 
						exact
						path="/shop"
						component={ Shop }
					/>

					<Route 
						path="/shop/:id"
						component={ Product }
					/>

					<Route 
						path="/add"
						component={ AddNewProduct }
					/>

					<Redirect 
						to="/" 
					/>

				</Switch>

			</Grid.Column>

				<Grid.Column width={6}>
					<Totals />
				</Grid.Column>
		</Grid>
	);
}

export default Main;