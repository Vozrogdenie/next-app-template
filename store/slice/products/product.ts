import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/store/types/product/produtc';
import { RootState } from '@/store/store';

interface ProductState {
  products: IProduct | null;
}

const initialState: ProductState = {
  products: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
