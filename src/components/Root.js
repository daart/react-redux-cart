import React, { Component } from 'react';

import ProductList from './ProductList';
import AddNewForm from './AddNewForm';
import Cart from './Cart';

class Root extends Component {
	render() {
		return (
			<div className="l_wrapper">
				<Cart />
				<ProductList />
				<AddNewForm />
			</div>
		)
	}
}

export default Root;