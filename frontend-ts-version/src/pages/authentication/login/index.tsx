import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { Button, Space } from '../../../components';

const styles = {
    wrapper: 'min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8',
    wrapperWidth: 'max-w-md w-full space-y-8',
    loginText: 'mt-6 text-center text-3xl font-extrabold text-gray-900',
    formWrapper: 'rounded-md shadow-sm -space-y-px',
    imgSize: 'mx-auto h-12 w-auto',
    invalid: 'text-red-600 text-sm',
};

type ILoginProps = {
  email?: string;
  password?: string;
};

const Login: React.FC = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginProps>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: ILoginProps) => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperWidth}>
                <div>
                    <img
                        className={styles.imgSize}
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Logo"
                    />
                    <h2 className={styles.loginText}>Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formWrapper}>
                        <TextField
                            type="text"
                            placeholder="Email Address"
                            {...register('email')}
                            className='w-full'
                        />
                        <div className={styles.invalid}>{errors.email?.message}</div>
                        <Space height={10} />
                        <TextField
                            placeholder="Password"
                            type="text"
                            {...register('password')}
                            className='w-full'
                        />
                        <div className={styles.invalid}>{errors.password?.message}</div>
                    </div>
                    <div>
                        <Button title="Sign In"></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
