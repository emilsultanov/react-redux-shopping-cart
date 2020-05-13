import * as actionTypes from "./actionTypes";
import axios from "axios";

export const set_products = (products) => {
	return { type: actionTypes.SET_PRODUCTS, payload: products };
};

export const fetch_products_failed = () => {
	return {
		type: actionTypes.FETCH_PRODUCTS_FAILED,
	};
};

export const fetch_products = () => {
	return (dispatch) => {
		axios
			.get("https://shopping-cart-21de1.firebaseio.com/products.json")
			.then((response) => {
				dispatch(set_products(response.data));
			})
			.catch((error) => {
				dispatch(fetch_products_failed());
			});
	};
};

export const add_product_to_cart = (product_id) => {
	return {
		type: actionTypes.ADD_PRODUCT_TO_CART,
		payload: { product_id },
	};
};

export const remove_product_from_cart = (product_id) => {
	return {
		type: actionTypes.REMOVE_PRODUCT_FROM_CART,
		payload: { product_id },
	};
};

export const select_product = (id, selectedValue) => {
	return (dispatch) => {
		if (selectedValue) {
			dispatch(add_product_to_cart(id));
		} else {
			dispatch(remove_product_from_cart(id));
		}
	};
};

export const change_quantity_of_product = (prevValue, nextValue, id) => {
	return {
		type: actionTypes.CHANGE_QUANTITY_OF_PRODUCT,
		payload: { prevValue, nextValue, id },
	};
};
