import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, Space } from '../../../components';
import TextField from '@mui/material/TextField';

const styles = {
  wrapper: `min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`,
  wrapperWidth: `max-w-md w-full space-y-8`,
  loginText: `mt-6 text-center text-3xl font-extrabold text-gray-900`,
  formWrapper: `rounded-md shadow-sm -space-y-px`,
  imgSize: `mx-auto h-12 w-auto`,
};

export interface IRegisterProps {
  username?: string;
  email?: string;
  password?: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [register, setRegister] = useState<IRegisterProps>({});

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`email: ${register.email}`);
    console.log(`password: ${register.password}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperWidth}>
        <div>
          <img
            className={styles.imgSize}
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Logo'
          />
          <h2 className={styles.loginText}>Register</h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={submitHandler}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className={styles.formWrapper}>
            <Input
              placeholder='Username'
              handleChange={(e) =>
                setRegister({ ...register, username: e.target.value })
              }
            />
            <Space height={10} />
            <Input
              placeholder='Email Address'
              handleChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <Space height={10} />
            <Input
              placeholder='Password'
              handleChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <Space height={10} />
            <TextField
              label='Outlined'
              variant='outlined'
              className='w-full'
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div>
            <Button title='Register'></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
