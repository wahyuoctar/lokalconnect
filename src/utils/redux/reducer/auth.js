const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  id: 0,
  fullname: '',
  username: '',
  email: '',
  avatar: '',
  role: '',
  phone: '',
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.fullname = action.payload.fullname;
      state.avatar = action.payload.avatar;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
      state.id = 1;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
