import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/shoes.json';

const initialState = {
	productList: data,
	productSelected: {},
	productSelectedByCategory: [],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductList: (state, action) => {
			state.productList = action.payload;
		},
		setProductSelected: (state, action) => {
			state.productSelected = state.productList.find(
				(product) => product.id === parseInt(action.payload)
			);
		},
		setProductListByCategory: (state, action) => {
			state.productSelectedByCategory = state.productList.filter(
				(product) => product.category === action.payload
			);
		},
	},
});

export const { setProductSelected, setProductListByCategory } =
	productSlice.actions;
export default productSlice.reducer;
