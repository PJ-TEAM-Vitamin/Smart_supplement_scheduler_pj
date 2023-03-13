import { combineReducers } from 'redux';
import userSlice from './user';

// 리듀서 병합
const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;
