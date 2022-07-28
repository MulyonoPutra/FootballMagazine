import './card.scss';
import { useNavigate } from 'react-router-dom';
import SmallButton from './../../atoms/small-button/index'
const Card = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='container p-4'>
        <div className='max-w-lg mx-auto'>
          <div className='card'>
            <a href='!#'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='!#'>
                <h5 className='title'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='text'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <SmallButton
                className='read-more'
                title='Read More'
                onClick={() => {
                  navigate('/detail');
                }}
              >
                Read more
              </SmallButton>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};
export default Card;
