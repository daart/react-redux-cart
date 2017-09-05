import React from 'react';
import { connect } from 'react-redux';
import { Segment, Message } from 'semantic-ui-react';

const Product = (props) => {
	let { id } = props.match.params;
	let { warehouse } = props || {}; 
	
	if(!warehouse[id]) {
		return (
			<Message warning>
				<Message.Header>
					No such product found!
				</Message.Header>
				please make sure you've entered correct productID
			</Message>
		)
	}
	
	let { title, price, qty } = warehouse[id];

	return (
		<div>
			<Segment.Group horizontal>
				<Segment>
					{ id }
				</Segment>
				<Segment>
					{ title }
				</Segment>
				<Segment>
					{ qty }
				</Segment>
				<Segment>
					{ price }
				</Segment>
			</Segment.Group>
		</div>
	);
};

let mapStateToProps = (state) => ({
	warehouse: state.warehouse
});

export default connect(mapStateToProps)(Product);