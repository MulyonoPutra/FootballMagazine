const initialState = {
  title: [],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
      case'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      }

    default:
      return state;
  }
};

export default globalReducer;
