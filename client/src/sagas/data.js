import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
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
} from '../reducers/data';
import {backUrl} from "../config/config";

// 서버에 요청
export function recordOfTimeAPI() {
  return axios.get(`${backUrl}/user`);
}
function* recordOfTime(action) {
  try {
    const result = yield call(recordOfTimeAPI);
    console.log('saga: ', action);
    yield put({
      type: RECORD_OF_TIME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECORD_OF_TIME_FAILURE,
      error: err.response.data,
    });
  }
}

export function updateTumblrAPI() {
   return axios.get(`${backUrl}/water/weight/tumbler`);
}
function* updateTumblr(action) {
  try {
    const result = yield call(updateTumblrAPI);
    console.log('saga: ', action);
    yield put({
      type: UPDATE_TUMBLR_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_TUMBLR_FAILURE,
      error: err.response.data,
    });
  }
}

export function loadTumblrAPI(data) {
  return axios.get(`${backUrl}/water`, data);
}

function* loadTumblr(action) {
  try {
    const result = yield call(loadTumblrAPI);
    console.log('saga: ', action);
    yield put({
      type: LOAD_TUMBLR_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_TUMBLR_FAILURE,
      error: err.response.data,
    });
  }
}

export function cartridgeInfoAPI() {
  return axios.get(`${backUrl}/user`);
}
function* cartridgeInfo(action) {
  try {
   // const result = yield call(cartridgeInfoAPI);
    console.log('saga: ', action);
    const dummy = [
      {
        index: 0,
        name: '비타민A',
        residual: 40,
      },
      {
        index: 1,
        name: '비타민B',
        residual: 100,
      },
      {
        index: 2,
        name: '비타민C',
        residual: 70,
      },
    ];
    yield put({
      type: CARTRIDGE_INFO_SUCCESS,
      data: dummy,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CARTRIDGE_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

// request 이벤트 추가
function* watchRecordOfTime() {
  yield takeLatest(RECORD_OF_TIME_REQUEST, recordOfTime);
}
function* watchUpdateTumblr() {
  yield takeLatest(UPDATE_TUMBLR_REQUEST, updateTumblr);
}
function* watchLoadTumblr() {
  yield takeLatest(LOAD_TUMBLR_REQUEST, loadTumblr);
}
function* watchCartridgeInfo() {
  yield takeLatest(CARTRIDGE_INFO_REQUEST, cartridgeInfo);
}

export default function* userSaga() {
  yield all([fork(watchRecordOfTime)]);
  yield all([fork(watchUpdateTumblr)]);
  yield all([fork(watchLoadTumblr)]);
  yield all([fork(watchCartridgeInfo)]);
}
