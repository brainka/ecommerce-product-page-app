import { configureStore } from '@reduxjs/toolkit';

import productRedcer from '../redux/product/productSlice';

export const store = configureStore({
	reducer: {
		product: productRedcer,
	},
});

export default store;
