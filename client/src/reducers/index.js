import { combineReducers } from 'redux';
import userSlice from './user';
import dataSlice from './data';

// 리듀서 병합
const rootReducer = combineReducers({
  user: userSlice.reducer,
  data: dataSlice.reducer,
});

export default rootReducer;
