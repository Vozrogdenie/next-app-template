import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const safeParseJSON = (jsonString: string | null) => {
  try {
    return jsonString ? JSON.parse(jsonString) : [];
  } catch (error) {
    return [];
  }
};

const initialState =
  typeof window !== 'undefined' ? safeParseJSON(localStorage.getItem('cart')) : [];

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addToCard: (
      state,

      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        image: string;
      }>
    ) => {
      const newItem = action.payload;

      const existingItem = state.find((item: { id: number }) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const updatedState = state.filter((item: { id: any }) => item.id !== action.payload);

      localStorage.setItem('cart', JSON.stringify(updatedState));

      return updatedState;
    },

    addQuantity: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const item = state.find((item: { id: number }) => item.id === action.payload);

      if (item) {
        item.quantity += 1;

        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    remQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex((item: { id: number }) => item.id === action.payload);
      if (itemIndex !== -1) {
        const item = state[itemIndex];

        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: () => [],
  },
 
});

export const { addToCard, removeFromCart, addQuantity, remQuantity, clearCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
