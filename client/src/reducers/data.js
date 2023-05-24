import { createSlice } from '@reduxjs/toolkit';

// 초깃값
export const initialState = {
  amountOfWater: 0,
  tumblrCounter: 0,
  cartridgeInfo: null, // 카트리지
  pillInfo: null,
  recordOfTimeLoading: false,
  recordOfTimeDone: false,
  recordOfTimeError: false,
  updateTumblrLoading: false,
  updateTumblrDone: false,
  updateTumblrError: false,
  loadTumblrLoading: false,
  loadTumblrDone: false,
  loadTumblrError: false,
  cartridgeInfoLoading: false,
  cartridgeInfoDone: false,
  cartridgeInfoError: false,
  pillInfoLoading: false,
  pillInfoDone: false,
  pillInfoError: false,
};

// data slice 생성
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    RECORD_OF_TIME_REQUEST: state => {
      state.recordOfTimeLoading = true;
      state.recordOfTimeDone = false;
      state.recordOfTimeError = null;
      console.log('reducer request');
    },
    RECORD_OF_TIME_SUCCESS: (state, action) => {
      state.recordOfTimeLoading = false;
      state.recordOfTimeDone = true;
      console.log('reducer: ', action);
    },
    RECORD_OF_TIME_FAILURE: (state, action) => {
      state.recordOfTimeLoading = false;
      state.recordOfTimeDone = false;
      state.recordOfTimeError = action.error;
    },
    CARTRIDGE_INFO_REQUEST: state => {
      state.cartridgeInfoLoading = true;
      state.cartridgeInfoDone = false;
      state.cartridgeInfoError = null;
      console.log('reducer request');
    },
    CARTRIDGE_INFO_SUCCESS: (state, action) => {
      state.cartridgeInfoLoading = false;
      state.cartridgeInfoDone = true;
      state.cartridgeInfo = action.data;
      console.log('reducer: ', action);
    },
    CARTRIDGE_INFO_FAILURE: (state, action) => {
      state.cartridgeInfoLoading = false;
      state.cartridgeInfoDone = false;
      state.cartridgeInfoError = action.error;
    },
    UPDATE_TUMBLR_REQUEST: state => {
      // 마신 양 업데이트
      state.updateTumblrLoading = true;
      state.updateTumblrDone = false;
      state.updateTumblrError = null;
      console.log('reducer request');
    },
    UPDATE_TUMBLR_SUCCESS: (state, action) => {
      state.updateTumblrLoading = false;
      state.updateTumblrDone = true;
      state.amountOfWater = action.data.water;
      state.tumblrCounter = action.data.count;
      console.log('reducer: ', action);
    },
    UPDATE_TUMBLR_FAILURE: (state, action) => {
      state.updateTumblrLoading = false;
      state.updateTumblrDone = false;
      state.updateTumblrError = action.error;
    },
    LOAD_TUMBLR_REQUEST: state => {
      // 텀블러 로딩?
      state.loadTumblrLoading = true;
      state.loadTumblrDone = false;
      state.loadTumblrError = null;
      console.log('reducer request');
    },
    LOAD_TUMBLR_SUCCESS: (state, action) => {
      state.loadTumblrLoading = false;
      state.loadTumblrDone = true;
      state.amountOfWater = action.data.amount_of_water;
      state.tumblrCounter = action.data.tumbler_count;
      console.log('reducer: ', action);
    },
    LOAD_TUMBLR_FAILURE: (state, action) => {
      state.loadTumblrLoading = false;
      state.loadTumblrDone = false;
      state.loadTumblrError = action.error;
    },
    PILL_INFO_REQUEST: state => {
      // 텀블러 로딩?
      state.pillInfoLoading = true;
      state.pillInfoDone = false;
      state.pillInfoError = null;
      console.log('reducer request');
    },
    PILL_INFO_SUCCESS: (state, action) => {
      state.pillInfoLoading = false;
      state.pillInfoDone = true;
      state.pillInfo = action.data;
      console.log('reducer: ', action);
    },
    PILL_INFO_FAILURE: (state, action) => {
      state.pillInfoLoading = false;
      state.pillInfoDone = false;
      state.pillInfoError = action.error;
    },
  },
});

export const {
  RECORD_OF_TIME_REQUEST,
  RECORD_OF_TIME_SUCCESS,
  RECORD_OF_TIME_FAILURE,
  UPDATE_TUMBLR_REQUEST,
  UPDATE_TUMBLR_SUCCESS,
  UPDATE_TUMBLR_FAILURE,
  LOAD_TUMBLR_REQUEST,
  LOAD_TUMBLR_SUCCESS,
  LOAD_TUMBLR_FAILURE,
  CARTRIDGE_INFO_REQUEST,
  CARTRIDGE_INFO_SUCCESS,
  CARTRIDGE_INFO_FAILURE,
  PILL_INFO_REQUEST,
  PILL_INFO_SUCCESS,
  PILL_INFO_FAILURE,
} = dataSlice.actions;

export default dataSlice;
