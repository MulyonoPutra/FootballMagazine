import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

const AComponent = () => {
  const { data, name } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'SET_NAME' });
    }, 3000);
  });

  return <div>AComponent: {name}</div>;
};
export default AComponent;
