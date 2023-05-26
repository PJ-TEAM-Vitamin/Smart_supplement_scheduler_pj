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
  PILL_INFO_REQUEST,
  PILL_INFO_SUCCESS,
  PILL_INFO_FAILURE,
  CURRENT_HEALTH_INFO_REQUEST,
  CURRENT_HEALTH_INFO_SUCCESS,
  CURRENT_HEALTH_INFO_FAILURE,
  CURRENT_MONTH_INDEX_SUCCESS,
  CURRENT_MONTH_INDEX_FAILURE,
  CURRENT_MONTH_INDEX_REQUEST,
} from '../reducers/data';
import { backUrl } from '../config/config';

// 서버에 요청
export function recordOfTimeAPI() {
  return axios.get(`${backUrl}/user`);
}
function* recordOfTime(action) {
  try {
    const result = yield call(recordOfTimeAPI);
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

export function loadTumblrAPI() {
  return axios.get(`${backUrl}/water`);
}

function* loadTumblr(action) {
  try {
    const result = yield call(loadTumblrAPI);

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
  return axios.get(`${backUrl}/cartridge`);
}
function* cartridgeInfo(action) {
  try {
    const result = yield call(cartridgeInfoAPI);

    yield put({
      type: CARTRIDGE_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CARTRIDGE_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

export function pillInfoAPI(data) {
  return axios.get(`${backUrl}/cartridge/pill/?id=${data.id}&name=${data.name}`);
}
function* pillInfo(action) {
  try {
    const result = yield call(pillInfoAPI, action.payload);

    yield put({
      type: PILL_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PILL_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

export function currentHealthInfoAPI(data) {
  return axios.get(`${backUrl}/healthcare?id=1&date=${data.date}`);
}
function* currentHealthInfo(action) {
  try {
    const result = yield call(currentHealthInfoAPI, action.payload);

    yield put({
      type: CURRENT_HEALTH_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CURRENT_HEALTH_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

export function currentMonthIndexAPI(data) {
  console.log('month ', data.date.slice(0, 7));
  return axios.get(`${backUrl}/healthcare/month_date?id=1&date=${data.date.slice(0, 7)}`);
}
function* currentMonthIndex(action) {
  try {
    const result = yield call(currentMonthIndexAPI, action.payload);
    yield put({
      type: CURRENT_MONTH_INDEX_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CURRENT_MONTH_INDEX_FAILURE,
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
function* watchPillInfo() {
  yield takeLatest(PILL_INFO_REQUEST, pillInfo);
}
function* watchCurrentHealthInfo() {
  yield takeLatest(CURRENT_HEALTH_INFO_REQUEST, currentHealthInfo);
}
function* watchCurrentMonthIndex() {
  yield takeLatest(CURRENT_MONTH_INDEX_REQUEST, currentMonthIndex);
}

export default function* userSaga() {
  yield all([fork(watchRecordOfTime)]);
  yield all([fork(watchUpdateTumblr)]);
  yield all([fork(watchLoadTumblr)]);
  yield all([fork(watchCartridgeInfo)]);
  yield all([fork(watchPillInfo)]);
  yield all([fork(watchCurrentHealthInfo)]);
  yield all([fork(watchCurrentMonthIndex)]);
}
