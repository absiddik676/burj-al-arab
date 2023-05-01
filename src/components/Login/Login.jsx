import React, { useContext, useState } from 'react';
import { AuthContexApi } from '../../AuthContext/Provider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error,setError] = useState('');
    const [email,setEmail] = useState('')
    const { logIng,forgetPassword } = useContext(AuthContexApi)
    const location = useLocation();
    const navigate = useNavigate();
    const from =  location?.state?.from?.pathname || '/'
    const handelLogin = e => {
        
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setEmail(email)
        setError('')
        logIng(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                navigate(from,{replace:true})

            })
            .catch(error =>{
                console.log(error);
                setError(error.message)
            })
    }

    const handelResetPass = () =>{
        forgetPassword(email)
        .then(result =>{
            console.log(result);
        })
        .catch(error  =>{
            console.log(error);
        })
        
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handelLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a onClick={handelResetPass}  className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                            <span className='pt-12 text-red-500'>{error}</span>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default Login;