import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const safeParseJSON = (jsonString: string | null) => {
  try {
    return jsonString ? JSON.parse(jsonString) : { auth: {} };
  } catch (error) {
    return { auth: {} };
  }
};

const initialState =
  typeof window !== 'undefined' ? safeParseJSON(localStorage.getItem('auth')) : { auth: {} };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
      }>
    ) => {
      state.auth = action.payload;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    clearAuth: () => [],
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.auth;

export default authSlice.reducer;
