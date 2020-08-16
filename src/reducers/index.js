import { combineReducers } from 'redux';

import { users } from './users.reducer';
import { alert } from './alert.reducer';


const rootReducer = combineReducers({
  users,
  alert
});

export default rootReducer;