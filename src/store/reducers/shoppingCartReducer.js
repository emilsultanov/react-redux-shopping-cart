import * as actionTypes from "../actions/actionTypes";

const initial_state = {
	products: null,
	error: false,
	cartProducts: [],
	mainPriceOfProducts: 0,
	discountPriceOfProducts: 0,
	totalPriceOfProducts: 0,
	totalQuantityOfProducts: 0,
};

const shoppingCartReducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.SET_PRODUCTS:
			return { ...state, error: false, products: action.payload };

		case actionTypes.FETCH_PRODUCTS_FAILED:
			return { ...state, error: true };

		case actionTypes.ADD_PRODUCT_TO_CART:
			let { products } = state;
			let _filteredProducts = products.filter(
				(product) => action.payload.product_id === product.product_id
			);
			let _cartProducts = [...state.cartProducts, ..._filteredProducts];
			let _addedCartProducts = [...new Set(_cartProducts)].map((item) => {
				item["size"] = 1;
				return item;
			});

			let _totalQuantityOfProducts = state.totalQuantityOfProducts;
			_totalQuantityOfProducts++;

			let _mainPriceOfProducts = state.mainPriceOfProducts;
			let _totalPriceOfProducts = state.totalPriceOfProducts;
			let _discountPriceOfProducts = state.discountPriceOfProducts;
			let _productPrice, _productDiscountPrice;

			_addedCartProducts.forEach((item) => {
				if (item.product_id === action.payload.product_id) {
					_productPrice = item.product_price;
					_productDiscountPrice = item.product_discount_price;
				}
			});
			_totalPriceOfProducts += _productPrice;
			_discountPriceOfProducts += _productDiscountPrice;
			_mainPriceOfProducts =
				_totalPriceOfProducts - _discountPriceOfProducts;

			return {
				...state,
				cartProducts: _addedCartProducts,
				totalPriceOfProducts: _totalPriceOfProducts,
				discountPriceOfProducts: _discountPriceOfProducts,
				mainPriceOfProducts: _mainPriceOfProducts,
				totalQuantityOfProducts: _totalQuantityOfProducts,
			};

		case actionTypes.REMOVE_PRODUCT_FROM_CART:
			let { cartProducts } = state;
			let __removedProduct;
			cartProducts.forEach((item) => {
				if (item.product_id === action.payload.product_id) {
					__removedProduct = item;
				}
			});

			let __totalQuantityOfProducts = state.totalQuantityOfProducts;
			__totalQuantityOfProducts -= __removedProduct.size;

			let __productPrice, __productDiscountPrice, __productSize;
			let __totalPriceOfProducts = state.totalPriceOfProducts;
			let __discountPriceOfProducts = state.discountPriceOfProducts;
			let __mainPriceOfProducts = state.mainPriceOfProducts;

			__productPrice = __removedProduct.product_price;
			__productDiscountPrice = __removedProduct.product_discount_price;
			__productSize = __removedProduct.size;

			__totalPriceOfProducts -= __productSize * __productPrice;
			__discountPriceOfProducts -= __productSize * __productDiscountPrice;
			__mainPriceOfProducts =
				__totalPriceOfProducts - __discountPriceOfProducts;

			let __mainCartProducts = cartProducts.filter(
				(cartProduct) =>
					cartProduct.product_id !== action.payload.product_id
			);

			return {
				...state,
				cartProducts: __mainCartProducts,
				totalQuantityOfProducts: __totalQuantityOfProducts,
				totalPriceOfProducts: __totalPriceOfProducts,
				discountPriceOfProducts: __discountPriceOfProducts,
				mainPriceOfProducts: __mainPriceOfProducts,
			};

		case actionTypes.CHANGE_QUANTITY_OF_PRODUCT:
			let { prevValue, nextValue, id } = action.payload;
			let ___cartProducts = state.cartProducts;
			let ___totalQuantityOfProducts = state.totalQuantityOfProducts;
			let ___totalPriceOfProducts = state.totalPriceOfProducts;
			let ___mainPriceOfProducts = state.mainPriceOfProducts;
			let ___discountPriceOfProducts = state.discountPriceOfProducts;
			let ___productPrice, ___productDiscountPrice;

			___cartProducts.forEach((item) => {
				if (item.product_id === id) {
					item.size = nextValue;
					___productPrice = item.product_price;
					___productDiscountPrice = item.product_discount_price;
				}
			});

			if (nextValue > prevValue) {
				___totalQuantityOfProducts += nextValue - prevValue;
				___totalPriceOfProducts +=
					(nextValue - prevValue) * ___productPrice;
				___discountPriceOfProducts +=
					(nextValue - prevValue) * ___productDiscountPrice;
				___mainPriceOfProducts =
					___totalPriceOfProducts - ___discountPriceOfProducts;
			} else if (prevValue > nextValue) {
				___totalQuantityOfProducts -= prevValue - nextValue;
				___totalPriceOfProducts -=
					(prevValue - nextValue) * ___productPrice;
				___discountPriceOfProducts -=
					(prevValue - nextValue) * ___productDiscountPrice;

				___mainPriceOfProducts =
					___totalPriceOfProducts - ___discountPriceOfProducts;
			}

			return {
				...state,
				cartProducts: ___cartProducts,
				totalQuantityOfProducts: ___totalQuantityOfProducts,
				totalPriceOfProducts: ___totalPriceOfProducts,
				discountPriceOfProducts: ___discountPriceOfProducts,
				mainPriceOfProducts: ___mainPriceOfProducts,
				// cartProducts: _mainCartProducts,
			};

		default:
			return state;
	}
};
export default shoppingCartReducer;
