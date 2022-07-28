import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SmallButton } from './../../../components';
import './detail.scss';
import { useSelector, useDispatch } from 'react-redux';
import { findById } from './../../../config/redux/action';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSelector((state) => state.detailReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findById(id));
  }, [dispatch, id]);

  return (
    <div className='details'>
      <div className='details-container'>
      <SmallButton title='Back to Home'
        onClick={() => {
          navigate('/');
        }}
      />
        <div className='details-container-wrapper'>
          <span className='cover'>
            <img
              className='cover-img'
              src={`http://localhost:4000/${data.image}`}
              alt={data.title}
            />
          </span>
          <div className='tag'>
            <span className='tag-items'>
              Django
            </span>
            <span className='tag-items'>
              Python
            </span>
            <span className='tag-items'>
              web development
            </span>
          </div>
          <div className='mt-2'>
            <span className='title'>
              {data.title}
            </span>
            <div className='profile'>
              <span>
                <img src='https://avatars.githubusercontent.com/u/71964085?v=4' alt={data.author?.name}/>
                <h1> By {data.author?.name} </h1>
              </span>
            </div>
          </div>
          <div className='body'>
            <div>
              <p className='mt-2 p-8'>{data.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
