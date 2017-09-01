const defaultState = {
	[(Math.random() * 10).toPrecision(5)]: {
		title: '42" Samsung smart TV',
		qty: 12,
		price: 455.99
	},
	[(Math.random() * 10).toPrecision(5)]: {
		title: '13" macbook Pro (retina 2017)',
		qty: 5,
		price: 1399.76
	},
	[(Math.random() * 10).toPrecision(5)]: {
		title: 'MSI gForce gt980ti',
		qty: 19,
		price: 998.85
	},
	[(Math.random() * 10).toPrecision(5)]: {
		title: 'Phillips headphones z465',
		qty: 23,
		price: 55.88
	}
};

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}