import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  MY_INFO_REQUEST,
  MY_INFO_SUCCESS,
  MY_INFO_FAILURE,
} from '../reducers/user';

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

export function myInfoAPI() {
  // ex) return axios.get('/signup');
}
function* myInfo(action) {
  try {
    // const result = yield call(signUpAPI);
    console.log('saga: ', action);
    const dummyMe = {
      name: 'ch',
      gender: 'male',
      age: '27',
    };
    yield put({
      type: MY_INFO_FAILURE,
      // data: result.data,
      data: dummyMe,
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
function* watchMyInfo() {
  yield takeLatest(MY_INFO_REQUEST, myInfo);
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
  yield all([fork(watchMyInfo)]);
}
