const initialState = {
  data: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_BY_ID':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
