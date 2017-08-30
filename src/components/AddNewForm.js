import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToWarehouse } from '../actions';

import './AddNewForm.css';

const defaultForm = {
	title: '',
	qty: '',
	price: ''
};

class AddNewForm extends Component {
	state = {...defaultForm}

	inputHandler = (ev) => {
		ev.preventDefault();
		let { name, value } = ev.target;
		
		if(!value) return ;

		if(name !== 'title') {
			+value;
		}

		this.setState({
			[name]: value
		})

	}

	formHandler = (ev) => {
		ev.preventDefault();
		let { title, qty, price } = this.state;

		if(!title || !qty || !price) return;
		
		this.props.addToWarehouse({ title, qty, price });
		
		this.setState({
			...defaultForm
		})
	}

	render() {
		return (
			<div className="form_wrapper">
				<form 
					autoComplete="off"
					onSubmit={ this.formHandler }
				>
					<fieldset>
						<label 
							htmlFor="title"
						>
						Title: { ' ' }

						<input 
							type="text"
							value={ this.state.title }
							name="title"
							onChange={ this.inputHandler }
						/>

						</label>
					</fieldset>

					<fieldset>
						<label 
							htmlFor="qty"
						>
						Qty: { ' ' }

						<input 
							type="number"
							value={ this.state.qty }
							name="qty"
							onChange={ this.inputHandler }
						/>

						</label>
					</fieldset>
					
					<fieldset>
						<label 
							htmlFor="price"
						>
						Price: { ' ' }

						<input 
							type="number"
							value={ this.state.price }
							step="0.01"
							name="price"
							onChange={ this.inputHandler }
						/>

						</label>
					</fieldset>

					<input type="submit"/>

				</form>
			</div>
		)
	}
}

let mapStateToProps = (currentState) => ({
	productsByID: currentState.productsByID
});

let mapDispatchToProps = (dispatch) => ({
	addToWarehouse(formData) {
		dispatch(addToWarehouse(formData))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewForm);