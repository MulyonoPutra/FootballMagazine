import { combineReducers } from 'redux';
import globalReducer from './GlobalReducer';
import homeReducer from './HomeReducer';
import createReducer from './CreateReducer';
import detailReducer from './DetailReducer';
import { loginReducer, registerReducer } from './UserReducer';

const reducer = combineReducers({
  globalReducer,
  homeReducer,
  createReducer,
  detailReducer,
  userSignin: loginReducer,
  userRegister: registerReducer,
});

export default reducer;
