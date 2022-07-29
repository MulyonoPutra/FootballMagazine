import React from 'react';
import './button.scss';
import { LockClosedIcon } from '@heroicons/react/solid';

export interface ButtonProps {
  title: string;
  handleClick?: React.MouseEventHandler;
}

const Button = (props: ButtonProps) => {

    const { title, handleClick } = props;
  
    return (
        <button type='submit' className='btn-style' onClick={handleClick}>
            <span className='closed-icon-wrapper'>
                <LockClosedIcon className='closed-icon' aria-hidden='true' />
            </span>
            {title}
        </button>
    );

};

export default Button;
