import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
