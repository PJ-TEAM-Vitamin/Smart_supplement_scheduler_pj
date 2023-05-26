import { createSlice } from '@reduxjs/toolkit';

// 초깃값
export const initialState = {
  me: null,
  signUpLoading: false, // 회원등록
  signUpDone: false,
  signUpError: null,
  setTumbler: 0,
  setTumblerLoading: false, // 텀블러 무게 셋팅
  setTumblerDone: false,
  setTumblerError: false,
  myInfoLoading: false, // 유저 정보 불러오기
  myInfoDone: false,
  myInfoError: null,
};

// user slice 생성
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SIGN_UP_REQUEST: state => {
      // 회원 등록 관련
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
    },
    SIGN_UP_SUCCESS: (state, action) => {
      state.signUpLoading = false;
      state.signUpDone = true;
    },
    SIGN_UP_FAILURE: (state, action) => {
      state.signUpLoading = false;
      state.signUpDone = false;
      state.signUpError = action.error;
    },
    SET_TUMBLER_REQUEST: state => {
      state.setTumblerLoading = true;
      state.setTumblerDone = false;
      state.setTumblerError = null;
    },
    SET_TUMBLER_SUCCESS: (state, action) => {
      state.setTumblerLoading = false;
      state.setTumblerDone = true;
      state.setTumbler = action.data;
    },
    SET_TUMBLER_FAILURE: (state, action) => {
      state.setTumblerLoading = false;
      state.setTumblerDone = false;
      state.setTumblerError = action.error;
    },
    MY_INFO_REQUEST: (state, data) => {
      // 유저 기본 정보 불러오기
      state.myInfoLoading = true;
      state.myInfoDone = false;
      state.myInfoError = null;
    },
    MY_INFO_SUCCESS: (state, action) => {
      state.myInfoLoading = false;
      state.myInfoDone = true;
      state.me = action.data.data;
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
  SET_TUMBLER_REQUEST,
  SET_TUMBLER_SUCCESS,
  SET_TUMBLER_FAILURE,
  MY_INFO_REQUEST,
  MY_INFO_SUCCESS,
  MY_INFO_FAILURE,
} = userSlice.actions;

export default userSlice;
