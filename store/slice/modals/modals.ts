import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface ModalsState {
  cart: boolean;
  login: boolean;
}

const initialState: ModalsState = {
  cart: false,
  login: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<boolean>) => {
      state.cart = action.payload;
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    },
  },
});

export const { setCart, setLogin } = modalsSlice.actions;

export const selectModalsCart = (state: RootState) => state.modals.cart;
export const selectModalsLogin = (state: RootState) => state.modals.login;

export default modalsSlice.reducer;
