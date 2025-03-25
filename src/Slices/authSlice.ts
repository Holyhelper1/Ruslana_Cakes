import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    user: { uid: string; email: string } | null; 
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      sessionStorage.removeItem("user");
    },
    initialize: (state) => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
          state.isAuthenticated = true;
          state.user = user;
        }
    }
  },
});

export const { login, logout, initialize } = authSlice.actions;
export const selectIsAuthenticated = ( state: { auth: AuthState }) => state.auth.isAuthenticated;

export default authSlice.reducer;
