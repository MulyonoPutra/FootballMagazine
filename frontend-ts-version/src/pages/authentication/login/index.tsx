import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, Space } from '../../../components';

const styles = {
  wrapper       : `min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`,
  wrapperWidth  : `max-w-md w-full space-y-8`,
  loginText     : `mt-6 text-center text-3xl font-extrabold text-gray-900`,
  formWrapper   : `rounded-md shadow-sm -space-y-px`,
  imgSize       : `mx-auto h-12 w-auto`
}

export interface ILoginProps {
  email?: string;
  password?: string;
}

const Login = () => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const [login, setLogin] = useState<ILoginProps>({});

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`email: ${login.email}`);
    console.log(`password: ${login.password}`);
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
          <h2 className={styles.loginText}>Sign in to your account</h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={submitHandler}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className={styles.formWrapper}>
            <Input
              placeholder='Email Address'
              handleChange={(e) => setLogin({...login, email: e.target.value})}
            />
            <Space height={10} />
            <Input
              placeholder='Password'
              handleChange={(e) => setLogin({...login, password: e.target.value})}
            />
          </div>
          <div>
            <Button title='Sign In'></Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
