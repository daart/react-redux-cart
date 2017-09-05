import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { createNew } from '../actions';

const defaultFormState = {
	title: '',
	price: 0,
	qty: 0
}

class AddNewProduct extends Component {
	state = defaultFormState;
	
	formHandler = (e) => {
		e.preventDefault();
		
		let { title, price, qty } = this.state;
		
		if( !title || !price || !qty ) return;

		this.props.createNew({ title, qty, price });
		this.setState({ ...defaultFormState })
	}

	inputHandler = (e) => {
		let { name, value } = e.target;

		this.setState({
			[name]: name !== 'title' ? +value : value
		})
	}

	render() {
		console.log(this.state);

		return (
			<div className="l_addNew-form">
				<h2>AddNewProduct!</h2>
				<Form 
					onSubmit={ this.formHandler } 
				>
					<Form.Field>
						<label>Title</label>
						<input
							name="title" 
							onChange={ this.inputHandler }
							placeholder='Product Title' 
							value={ this.state.title }
						/>
					</Form.Field>
					<Form.Field>
						<label>Price</label>
						<input 
							name="price"
							type="number"
							onChange={ this.inputHandler }
							step="0.01"
							placeholder='Price' 
							value={ !this.state.price ? '' : this.state.price }
						/>
					</Form.Field>
					<Form.Field>
						<label>Qty</label>
						<input 
							name="qty"
							type="number"
							onChange={ this.inputHandler }
							placeholder='Quantity' 
							value={ !this.state.qty ? '' : this.state.qty }
						/>
					</Form.Field>
					
					<Button 
						onClick={() => console.log('click')}
						type='submit'>Submit</Button>
				</Form>
			</div>
		)
	}
}

let mapDispatchToProps = (dispatch) => ({
	createNew(formData) {
		dispatch(createNew(formData))
	}
})

export default connect(null, mapDispatchToProps)(AddNewProduct);