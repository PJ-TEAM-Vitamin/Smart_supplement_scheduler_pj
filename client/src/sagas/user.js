import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  MY_INFO_REQUEST,
  MY_INFO_SUCCESS,
  MY_INFO_FAILURE,
  SET_TUMBLER_REQUEST,
  SET_TUMBLER_SUCCESS,
  SET_TUMBLER_FAILURE,
} from '../reducers/user';
import { backUrl } from '../config/config';

// 서버에 요청
export function signUpAPI() {
  // ex) return axios.get('/signup');
}
function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    console.log('saga: ', action);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
      data: action,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}
export function setTumblrAPI() {
  return axios.get(`${backUrl}/water/weight/tumbler`);
}
function* setTumblr(action) {
  try {
    console.log('start');
    const result = yield call(setTumblrAPI);
    // let result = 800;
    // yield delay(3000);
    yield put({
      type: SET_TUMBLER_SUCCESS,
      data: result.data.weight,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SET_TUMBLER_FAILURE,
      error: err.response.data,
    });
  }
}

export function myInfoAPI() {
  console.log()
  return axios.get(`${backUrl}/user`);
}
function* myInfo(action) {
  try {
    const result = yield call(myInfoAPI);
    console.log('saga: ', result);
    yield put({
      type: MY_INFO_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

// request 이벤트 추가
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchSetTumblr() {
  yield takeLatest(SET_TUMBLER_REQUEST, setTumblr);
}
function* watchMyInfo(data) {
  yield takeLatest(MY_INFO_REQUEST, myInfo);
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
  yield all([fork(watchMyInfo)]);
  yield all([fork(watchSetTumblr)]);
}
