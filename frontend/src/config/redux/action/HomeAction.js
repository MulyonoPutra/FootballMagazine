import axios from 'axios';

export const FIND_ALL = 'FIND_ALL';
export const UPDATE_PAGE = 'UPDATE_PAGE';

export const findAllWithPaging = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
      .then((response) => {
        const post = response.data;
        dispatch({ type: FIND_ALL, payload: post.data });
        dispatch({
          type: UPDATE_PAGE,
          payload: {
            currentPage: post.current_page,
            totalPage: Math.ceil(post.total_items / post.per_page),
          },
        });
        dispatch({ type: 'SET_TITLE', payload: post.data.slice(0, 3) });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const remove = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:4000/v1/blog/post/${id}`)
      .then((response) => {
        dispatch({ type: 'DELETE', payload: id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
