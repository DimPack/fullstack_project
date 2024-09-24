import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  count: countReducer,
  todo: todoReducer
  // users: usersReducer,
});


export default rootReducer;