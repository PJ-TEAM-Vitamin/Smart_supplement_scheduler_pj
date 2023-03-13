import { createSlice } from '@reduxjs/toolkit';

// 초깃값
export const initialState = {
  me: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

// user slice 생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SIGN_UP_REQUEST: (state) => {
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
      console.log('reducer request');
    },
    SIGN_UP_SUCCESS: (state, action) => {
      state.signUpLoading = false;
      state.signUpDone = true;
      console.log('reducer: ', action);
    },
    SIGN_UP_FAILURE: (state, action) => {
      state.signUpLoading = false;
      state.signUpDone = false;
      state.signUpError = action.error;
    },
  },
});

export const { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } =
  userSlice.actions;

export default userSlice;
