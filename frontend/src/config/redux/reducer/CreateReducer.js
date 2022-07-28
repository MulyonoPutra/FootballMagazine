const initialState = {
  form: {
    title: '',
    subtitle: '',
    body: '',
    image: '',
  },
  imagePreview: null,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue,
        },
      };

    case 'SET_IMAGE_PREVIEW':
      return {
        ...state,
        imagePreview: action.payload,
      };

    default:
      return state;
  }
};


export default createReducer;