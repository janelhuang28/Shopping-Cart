import axios from 'axios';
import { FETCH_PRODUCTS } from './actionTypes'

const compare = {
	lowestprice: (a, b) => {
		if (a.price < b.price) return -1;
		if(a.price > b.price) return 1;
		return 0;
	},

	highestprice: (a, b) => {
		if (a.price > b.price) return -1;
		if (a.price < b.price) return 1;
		return 0;
	}
};

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
	return axios
		.get('products.json')
		.then(res => {
			let { products } = res.data;
			console.log("enterede")
			if (!!filters && filters.length > 0) {
				products = products.filter(p =>
					filters.find(f => p.availableSizes.find(size => size === f))
				);
			}

			if (!!sortBy) {
				products = products.sort(compare[sortBy]);
			}

			if(!!callback) {
				callback();
			}

			return dispatch({
				type: FETCH_PRODUCTS,
				payload: products
			});
		})
		.catch( () => {
			console.log('Could not fetch products. Try again later.');
		});
};