import React, { useState } from 'react';

const Profile= () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Perform form submission or validation logic here
        // You can access the updated profile information from the state variables (name, email, password, confirmPassword)
    };

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleFormSubmit} className='max-w-sm mx-auto'>
                <div className='mb-4'>
                    <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor='confirmPassword' className='block text-gray-700 font-bold mb-2'>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        id='confirmPassword'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
