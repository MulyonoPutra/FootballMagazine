import { Popover } from '@headlessui/react';

import { Link } from 'react-router-dom';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from './../../../config/redux/action/UserAction';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const userLoggedIn = useSelector((state) => state.userSignin);
  const { userInfo } = userLoggedIn;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <Popover className='popover'>
      <div className='popover-container'>
        <div className='popover-container-wrapper'>
          <div className='logo'>
            <Link to='/'>
              <span className='sr-only'>Workflow</span>
              <img
                className='images'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Logo'
              />
            </Link>
          </div>
          {userInfo ? (
            <div className='dropdown'>
              <Link to='#' className='usernames'>
                {userInfo.name}
              </Link>
              <ul className='dropdown-content'>
                {userInfo && (
                  <li>
                    <Link to='/create'>Create New Post</Link>
                  </li>
                )}

                <br />
                <li>
                  <Link to='#signout' onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to='/login' className='sign-up-btn'>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </Popover>
  );
};

export default Header;
