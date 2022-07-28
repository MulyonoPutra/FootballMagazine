import { useState, useEffect } from 'react'
import { LoginButton, Input, Gap } from '../../components';
import './login.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'config/redux/action';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userLoggedIn = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userLoggedIn;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='wrapper'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='sign-in-text'>
            Sign in to your account
          </h2>
        </div>  
        <form className='mt-8 space-y-6' onSubmit={submitHandler}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <Input label='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
            <Gap height={10} />
            <Input label='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='!#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <LoginButton type='submit' title='Sign In'></LoginButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
