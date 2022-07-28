import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNOUT_REQUEST,
} from 'config/constants/UserConstants';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        isLoading: true,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        isLoading: false,
        userInfo: action.payload,
      };
    case USER_SIGNIN_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };
    case USER_SIGNOUT_REQUEST:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
      };
    case USER_REGISTER_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
