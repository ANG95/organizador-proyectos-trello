import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
export const signInAdapter = createEntityAdapter();

const initialState = {
  token: null,
  loading: false,
  userName: '',
  userEmail: '',
  photo: '',
  thumbnailImage: '',
  userId: '',
  userPhoneNumber: '',
  deviceNotificationToken: {
    token: '',
    os: ''
  },
};

const signInSlice = createSlice({
  name: 'signIn',
  initialState: signInAdapter.getInitialState(initialState),
  reducers: {
    deviceToken(state, action) {
      state.deviceNotificationToken = action.payload;
    },
    logout() {
      return signInAdapter.getInitialState(initialState);
    },
  },
});

export const {
  deviceToken, 
  logout
} = signInSlice.actions;

export default signInSlice.reducer;
