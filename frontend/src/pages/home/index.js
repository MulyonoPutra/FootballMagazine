import { useEffect, useState } from 'react';
import axios from 'axios';
import Items from './../blog/item/index';
import { useSelector, useDispatch } from 'react-redux';
import { findAllWithPaging } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './home.scss';

import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const Home = () => {
  const dispatch = useDispatch();

  const { data, page } = useSelector((state) => state.homeReducer);

  const [counter, setCounter] = useState(1);
  
  const host = 'http://localhost:4000/';

  useEffect(() => {
    dispatch(findAllWithPaging(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter >= page.totalPage ? page.totalPage : counter + 1);
  };


  useEffect(() => {
    data.map(data => {
      return console.log(data.image)
    })
  }, [data]);

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to remove this post?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios
              .delete(`${host}v1/blog/post/${id}`)
              .then((res) => {
                console.log('Deleted!', res);
                dispatch(findAllWithPaging(counter));
              })
              .catch((error) => console.log(error));
          },
        },
        {
          label: 'No',
          onClick: () => console.log('Click No'),
        },
      ],
    });
  };

  return (
    <>
      <div className='home-wrapper'>
        <div className='grid-with-gap'>
          {data
            ? data.map((post) => {
                return (
                  <div key={post._id}>
                    <Items
                      id={post._id}
                      image={`${host}${post.image}`}
                      title={post.title}
                      subtitle={post.subtitle}
                      body={post.body}
                      name={post.author.name}
                      date={post.createdAt}
                      onDelete={confirmDelete}
                    />
                  </div>
                );
              })
            : 'Empty'}
        </div>
        <div className='pagination'>
          <div className='pagination-container'>
            <div className='previous' onClick={previous}>
              <img src={ArrowLeft} alt='Previous' width={14} height={8} />
              <p className='previous-text'>Previous</p>
            </div>
            <div className='sm:flex hidden'>
              <p className='number'>{page.currentPage}</p>
              <p className='number'>{page.totalPage}</p>
            </div>
            <div className='previous' onClick={next}>
              <p className='previous-text mr-3'>Next</p>
              <img src={ArrowRight} alt='Previous' width={14} height={8} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
