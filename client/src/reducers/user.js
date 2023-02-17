import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  me: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
};

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOAD_MY_INFO_REQUEST: (state) => {
      state.loadMyInfoLoading = true;
      state.loadMyInfoDone = false;
      state.loadMyInfoError = null;
    },
    LOAD_MY_INFO_SUCCESS: (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoDone = true;
    },
    LOAD_MY_INFO_FAILURE: (state, action) => {
      state.loadMyInfoLoading = false;
      state.loadMyInfoDone = false;
      state.loadMyInfoError = action.error;
    },
  },
});

export default userSlice;
