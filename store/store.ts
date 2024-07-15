/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer from './slice/cart/cartSlice';
import productSlice from './slice/products/product';
import modalsSlice from './slice/modals/modals';
import authSlice from './slice/auth/auth';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productSlice,
    modals: modalsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
