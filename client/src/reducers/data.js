import { createSlice } from '@reduxjs/toolkit';

// 초깃값
export const initialState = {
  amountOfWater: 0,
  tumblrCounter: 0,
  takeMedicine: null,
  recordOfTimeLoading: false,
  recordOfTimeDone: false,
  recordOfTimeError: false,
  updateTumblrLoading: false,
  updateTumblrDone: false,
  updateTumblrError: false,
  resetTumblrLoading: false,
  resetTumblrDone: false,
  resetTumblrError: false,
};

// data slice 생성
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    RECORD_OF_TIME_REQUEST: (state) => {
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
    UPDATE_TUMBLR_REQUEST: (state) => {
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
    RESET_TUMBLR_REQUEST: (state) => {
      // 마신 양 업데이트
      state.resetTumblrLoading = true;
      state.resetTumblrDone = false;
      state.resetTumblrError = null;
      console.log('reducer request');
    },
    RESET_TUMBLR_SUCCESS: (state, action) => {
      state.resetTumblrLoading = false;
      state.resetTumblrDone = true;
      state.amountOfWater = action.data.water;
      state.tumblrCounter = action.data.count;
      console.log('reducer: ', action);
    },
    RESET_TUMBLR_FAILURE: (state, action) => {
      state.resetTumblrLoading = false;
      state.resetTumblrDone = false;
      state.resetTumblrError = action.error;
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
  RESET_TUMBLR_REQUEST,
  RESET_TUMBLR_SUCCESS,
  RESET_TUMBLR_FAILURE,
} = dataSlice.actions;

export default dataSlice;
