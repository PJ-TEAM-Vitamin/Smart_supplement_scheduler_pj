import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
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

// request 이벤트 추가
function* watchLoadMyInfo() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLoadMyInfo)]);
}
