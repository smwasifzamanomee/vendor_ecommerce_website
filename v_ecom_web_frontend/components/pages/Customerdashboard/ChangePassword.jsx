import React, { useState } from 'react';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Perform password change logic here
        // You can access the entered passwords from the state variables (currentPassword, newPassword, confirmNewPassword)
    };

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleFormSubmit} className='max-w-sm mx-auto'>
                <div className='mb-4'>
                    <label htmlFor='currentPassword' className='block text-gray-700 font-bold mb-2'>
                        Current Password
                    </label>
                    <input
                        type='password'
                        id='currentPassword'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='newPassword' className='block text-gray-700 font-bold mb-2'>
                        New Password
                    </label>
                    <input
                        type='password'
                        id='newPassword'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor='confirmNewPassword' className='block text-gray-700 font-bold mb-2'>
                        Confirm New Password
                    </label>
                    <input
                        type='password'
                        id='confirmNewPassword'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
