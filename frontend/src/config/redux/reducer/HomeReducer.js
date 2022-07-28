import { FIND_ALL, UPDATE_PAGE } from './../action/HomeAction';

const initialState = {
  data: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL:
      return {
        ...state,
        data: action.payload,
      };

    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
