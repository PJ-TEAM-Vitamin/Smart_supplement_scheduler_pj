import { createSlice } from '@reduxjs/toolkit';

// 초깃값
export const initialState = {
  amountOfWater: 0,
  tumblrCounter: 0,
  cartridgeInfo: null, // 카트리지
  pillInfo: null,
  currentHealthInfo: null,
  currentMonthIndex: [],
  searchPill: null,
  searchPillLoading: false,
  searchPillDone: false,
  searchPillError: false,
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
  intakeOrNotLoading: false,
  intakeOrNotDone: false,
  intakeOrNotError: false,
  dischargeLoading: false,
  dischargeDone: false,
  dischargeError: false,
  pillInfoLoading: false,
  pillInfoDone: false,
  pillInfoError: false,
  currentHealthInfoLoading: false,
  currentHealthInfoDone: false,
  currentHealthInfoError: false,
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
    },
    RECORD_OF_TIME_SUCCESS: (state, action) => {
      state.recordOfTimeLoading = false;
      state.recordOfTimeDone = true;
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
    },
    CARTRIDGE_INFO_SUCCESS: (state, action) => {
      state.cartridgeInfoLoading = false;
      state.cartridgeInfoDone = true;
      state.cartridgeInfo = action.data;
    },
    CARTRIDGE_INFO_FAILURE: (state, action) => {
      state.cartridgeInfoLoading = false;
      state.cartridgeInfoDone = false;
      state.cartridgeInfoError = action.error;
    },
    INTAKE_OR_NOT_REQUEST: state => {
      // 약을 섭취했는지 안했는지
      state.intakeOrNotLoading = true;
      state.intakeOrNotDone = false;
      state.intakeOrNotError = null;
    },
    INTAKE_OR_NOT_SUCCESS: (state, action) => {
      state.intakeOrNotLoading = false;
      state.intakeOrNotDone = true;
    },
    INTAKE_OR_NOT_FAILURE: (state, action) => {
      state.intakeOrNotLoading = false;
      state.intakeOrNotDone = false;
      state.intakeOrNotError = action.error;
    },
    DISCHARGE_REQUEST: state => {
      // 해당 알림 알약 배출 동작
      state.dischargeLoading = true;
      state.dischargeDone = false;
      state.dischargeError = null;
    },
    DISCHARGE_SUCCESS: (state, action) => {
      state.dischargeLoading = false;
      state.dischargeDone = true;
    },
    DISCHARGE_FAILURE: (state, action) =>{
      state.dischargeLoading = false;
      state.dischargeDone = false;
      state.dischargeError = action.error;
    },
    UPDATE_TUMBLR_REQUEST: state => {
      // 마신 양 업데이트
      state.updateTumblrLoading = true;
      state.updateTumblrDone = false;
      state.updateTumblrError = null;
    },
    UPDATE_TUMBLR_SUCCESS: (state, action) => {
      state.updateTumblrLoading = false;
      state.updateTumblrDone = true;
      state.amountOfWater = action.data.amount_of_water;
      state.tumblrCounter = action.data.currentCount;
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
    },
    LOAD_TUMBLR_SUCCESS: (state, action) => {
      state.loadTumblrLoading = false;
      state.loadTumblrDone = true;
      state.amountOfWater = action.data.amount_of_water;
      state.tumblrCounter = action.data.tumbler_count;
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
    },
    PILL_INFO_SUCCESS: (state, action) => {
      state.pillInfoLoading = false;
      state.pillInfoDone = true;
      state.pillInfo = action.data;
    },
    PILL_INFO_FAILURE: (state, action) => {
      state.pillInfoLoading = false;
      state.pillInfoDone = false;
      state.pillInfoError = action.error;
    },
    CURRENT_HEALTH_INFO_REQUEST: state => {
      state.currentHealthInfoLoading = true;
      state.currentHealthInfoDone = false;
      state.currentHealthInfoError = null;
    },
    CURRENT_HEALTH_INFO_SUCCESS: (state, action) => {
      state.currentHealthInfoLoading = false;
      state.currentHealthInfoDone = true;
      state.currentHealthInfo = action.data;
    },
    CURRENT_HEALTH_INFO_FAILURE: (state, action) => {
      state.currentHealthInfoLoading = false;
      state.currentHealthInfoDone = false;
      state.currentHealthInfoError = action.error;
    },
    CURRENT_MONTH_INDEX_REQUEST: state => {
      state.currentMonthIndexLoading = true;
      state.currentMonthIndexDone = false;
      state.currentMonthIndexError = null;
    },
    CURRENT_MONTH_INDEX_SUCCESS: (state, action) => {
      state.currentMonthIndexLoading = false;
      state.currentMonthIndexDone = true;
      state.currentMonthIndex = action.data;
      // action.data.date.map(v => state.currentMonthIndex.push(v));
    },
    CURRENT_MONTH_INDEX_FAILURE: (state, action) => {
      state.currentMonthIndexLoading = false;
      state.currentMonthIndexDone = false;
      state.currentMonthIndexError = action.error;
    },
    SEARCH_PILL_REQUEST: state => {
      state.searchPillLoading = true;
      state.searchPillDone = false;
      state.searchPillError = null;
    },
    SEARCH_PILL_SUCCESS: (state, action) => {
      state.searchPillLoading = false;
      state.searchPillDone = true;
      console.log('reducer', action.data);
      state.searchPill = action.data;
      // action.data.date.map(v => state.currentMonthIndex.push(v));
    },
    SEARCH_PILL_FAILURE: (state, action) => {
      state.searchPillLoading = false;
      state.searchPillDone = false;
      state.searchPillError = action.error;
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
  INTAKE_OR_NOT_REQUEST,
  INTAKE_OR_NOT_SUCCESS,
  INTAKE_OR_NOT_FAILURE,
  DISCHARGE_REQUEST,
  DISCHARGE_SUCCESS,
  DISCHARGE_FAILURE,
  PILL_INFO_REQUEST,
  PILL_INFO_SUCCESS,
  PILL_INFO_FAILURE,
  CURRENT_HEALTH_INFO_REQUEST,
  CURRENT_HEALTH_INFO_SUCCESS,
  CURRENT_HEALTH_INFO_FAILURE,
  CURRENT_MONTH_INDEX_REQUEST,
  CURRENT_MONTH_INDEX_SUCCESS,
  CURRENT_MONTH_INDEX_FAILURE,
  SEARCH_PILL_REQUEST,
  SEARCH_PILL_SUCCESS,
  SEARCH_PILL_FAILURE,
} = dataSlice.actions;

export default dataSlice;
