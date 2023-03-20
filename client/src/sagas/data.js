import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  RECORD_OF_TIME_REQUEST,
  RECORD_OF_TIME_SUCCESS,
  RECORD_OF_TIME_FAILURE,
  UPDATE_TUMBLR_REQUEST,
  UPDATE_TUMBLR_SUCCESS,
  UPDATE_TUMBLR_FAILURE,
  RESET_TUMBLR_REQUEST,
  RESET_TUMBLR_SUCCESS,
  RESET_TUMBLR_FAILURE,
  CARTRIDGE_INFO_REQUEST,
  CARTRIDGE_INFO_SUCCESS,
  CARTRIDGE_INFO_FAILURE,
} from '../reducers/data';

// 서버에 요청
export function recordOfTimeAPI() {
  // ex) return axios.get('/signup');
}
function* recordOfTime(action) {
  try {
    // const result = yield call(signUpAPI);
    console.log('saga: ', action);
    yield put({
      type: RECORD_OF_TIME_SUCCESS,
      // data: result.data,
      data: action,
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
  // ex) return axios.get('/signup');
}
function* updateTumblr(action) {
  try {
    // const result = yield call(signUpAPI);
    console.log('saga: ', action);
    const dummy = {
      water: 800,
      count: 0,
    };
    yield put({
      type: UPDATE_TUMBLR_SUCCESS,
      // data: result.data,
      data: dummy,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_TUMBLR_FAILURE,
      error: err.response.data,
    });
  }
}

export function resetTumblrAPI() {
  // ex) return axios.get('/signup');
}
function* resetTumblr(action) {
  try {
    // const result = yield call(signUpAPI);
    console.log('saga: ', action);
    const dummy = {
      water: 0,
      count: 0,
    };
    yield put({
      type: RESET_TUMBLR_SUCCESS,
      // data: result.data,
      data: dummy,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RESET_TUMBLR_FAILURE,
      error: err.response.data,
    });
  }
}

export function cartidgeInfoAPI() {
  // ex) return axios.get('/signup');
}
function* cartidgeInfo(action) {
  try {
    // const result = yield call(signUpAPI);
    console.log('saga: ', action);
    const dummy = [
      {
        index: 1,
        name: '비타민A',
        residual: 40,
      },
      {
        index: 2,
        name: '비타민B',
        residual: 100,
      },
      {
        index: 3,
        name: '비타민C',
        residual: 70,
      },
    ];
    yield put({
      type: CARTRIDGE_INFO_SUCCESS,
      // data: result.data,
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
function* watchResetTumblr() {
  yield takeLatest(RESET_TUMBLR_REQUEST, resetTumblr);
}
function* watchCartidgeInfo() {
  yield takeLatest(CARTRIDGE_INFO_REQUEST, cartidgeInfo);
}

export default function* userSaga() {
  yield all([fork(watchRecordOfTime)]);
  yield all([fork(watchUpdateTumblr)]);
  yield all([fork(watchResetTumblr)]);
  yield all([fork(watchCartidgeInfo)]);
}
