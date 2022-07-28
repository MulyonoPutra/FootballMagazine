import './items.scss';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';
import useTextOverflow from '../../../config/hooks/UseTextOverflow';

const Items = ({ id, title, subtitle, body, image, name, date, onDelete }) => {
  const navigate = useNavigate();
  const content = useTextOverflow(body, 30);

  return (
    <div className='mx-auto pt-10'>
      <div className='container'>
        <div className='container-wrapper'>
          <img
            alt={name}
            src={image}
            className='images'
          />
          <div className='card'>
            <p className='title'>
              {title}
            </p>
            <p className='text-gray-800 text-sm font-medium mb-2'>
              {subtitle}
            </p>
            <p className='content'>
              {content}
              <span
                className='read-more'
                onClick={() => {
                  navigate(`/details/${id}`);
                }}
              >
                Read More
              </span>
            </p>
            <div className='hastag'>
              <span className='hastag-title'>
                #blog
              </span>
            </div>
            <div className='flex items-center mt-2'>
              <img
                className='w-10 h-10 object-cover rounded-full'
                alt='User avatar'
                src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
              />
              <div className='pl-2'>
                <div className='font-medium'>{name}</div>
                <div className='text-gray-600 text-xs'>
                  {moment(date).fromNow()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Items;
