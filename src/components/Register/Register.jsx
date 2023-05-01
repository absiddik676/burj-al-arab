import React, { useContext, useState } from 'react';
import { AuthContexApi } from '../../AuthContext/Provider';

const Register = () => {
    const [error, setError] = useState('')
    const { createAccount, sendVerificationCode, updateUserProfile } = useContext(AuthContexApi)
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add one upper case');
            return;
        }


        createAccount(email, password)
            .then(result => {
                console.log(result.user);
                sendVerificationCode(result)
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    updateUserProfile(username)
                    .then(()=>{

                    })
                    .catch(error =>{
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className='flex h-screen items-center justify-center'>
            <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='username' id="username" type="text" placeholder="Enter your username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="Enter your password" />
                </div>
                <p className='text-red-600'>{error}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Register
                </button>
            </form>

        </div>
    );
};

export default Register;