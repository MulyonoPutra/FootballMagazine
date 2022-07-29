import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { Popover } from '@headlessui/react';

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

const Header: React.FC = () => {
    return (
        <Popover className='popover'>
            <div className='popover-container'>
                <div className='popover-container-wrapper'>
                    <div className='logo'>
                        <a href='/'>
                            <span className='sr-only'>Workflow</span>
                            <img
                                className='images'
                                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                alt='Logo'
                            />
                        </a>
                    </div>
                    {/* {userInfo ? (
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
        )} */}
                </div>
            </div>
        </Popover>
    );
};
export default Header;