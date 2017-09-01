import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';
import AddNewProduct from './AddNewProduct';

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
						path="/shop"
						component={ Shop }
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
		</Grid>
	);
}

export default Main;