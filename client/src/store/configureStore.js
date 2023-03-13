import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

import createSagaMiddleware from '@redux-saga/core';
import { all, fork } from 'redux-saga/effects';
import userSaga from '../sagas/user';

const sagaMiddleware = createSagaMiddleware();

// store 생성 _ saga 연결
const createStore = () => {
  // 기존의 createStore를 대체 _ Thunk, dev tool 자동 연결
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  // root saga 정의 _ 사가 병합
  const rootSaga = function* () {
    yield all([fork(userSaga)]);
  };

  // saga 실행
  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
