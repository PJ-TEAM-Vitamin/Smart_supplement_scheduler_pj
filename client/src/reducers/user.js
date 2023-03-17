import { createSlice } from '@reduxjs/toolkit';

// 초깃값
export const initialState = {
  me: null,
  signUpLoading: false, // 회원등록
  signUpDone: false,
  signUpError: null,
  myInfoLoading: false, // 유저 정보 불러오기
  myInfoDone: false,
  myInfoError: null,
};

// user slice 생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SIGN_UP_REQUEST: (state) => { // 회원 등록 관련
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
    MY_INFO_REQUEST: (state) => { // 유저 기본 정보 불러오기
      state.myInfoLoading = true;
      state.myInfoDone = false;
      state.myInfoError = null;
    },
    MY_INFO_SUCCESS: (state, action) => {
      state.myInfoLoading = false;
      state.myInfoDone = true;
      state.me = action.data;
      console.log('reducer: ', action);
    },
    MY_INFO_FAILURE: (state, action) => {
      state.myInfoLoading = false;
      state.myInfoDone = false;
      state.myInfoError = action.error;
      alert('등록된 유저정보가 없습니다.');
    },
  },
});

export const {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  MY_INFO_REQUEST,
  MY_INFO_SUCCESS,
  MY_INFO_FAILURE,
} = userSlice.actions;

export default userSlice;
