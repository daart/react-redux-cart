import React from 'react';
import { Header, List, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

let isActive = (match, location) => {
	console.log('match: ', match, ' ', ' match.params: ', match );
	return match;
}

const HeaderNav = () => {
	return (
		<Header>
			<Container fluid>
				<List>
					<List.Item>
						<List.Content> 
							<NavLink isActive={ isActive } to="/">Home</NavLink>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Content> 
							<NavLink isActive={ isActive } to="/shop">Shop</NavLink>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Content> 
							<NavLink to="/add">Add new Product</NavLink>
						</List.Content>
					</List.Item>
					<List.Item>
						<List.Content> 
							<NavLink isActive={ isActive } to="/checkout">Checkout</NavLink>
						</List.Content>
					</List.Item>
				</List>
			</Container>
		</Header>
	);	
}


export default HeaderNav;