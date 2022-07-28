import axios from 'axios';

export const findById = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((response) => {
        const postData = response.data.data;
        dispatch({ type: 'FIND_BY_ID', payload: postData });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
