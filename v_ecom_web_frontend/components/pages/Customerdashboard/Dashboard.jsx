import React, { useState } from 'react';
import DashboardData from './DashboardData';
import OrderData from './OrderData';
import WishlistData from './WishlistData';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import Address from './Address';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='container mx-auto flex p-6'>
            <div className='w-[20%]'>
                <ul className='cursor-pointer'>
                    <li
                        className={activeTab === 'dashboard' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('dashboard')}
                    >
                        Dashboard <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'orders' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('orders')}
                    >
                        Orders <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'wishlist' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('wishlist')}
                    >
                        WishList <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'profile' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('profile')}
                    >
                        Profile <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'change-password' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('change-password')}
                    >
                        Change Password <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'address' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('address')}
                    >
                        Address <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'logout' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('logout')}
                    >
                        Logout <hr className='border border-tertiary w-40'/>
                    </li>
                </ul>
            </div>
            <div className='w-[80%]'>
                {activeTab === 'dashboard' && <DashboardData/>}
                {activeTab === 'orders' && <OrderData/>}
                {activeTab === 'wishlist' && <WishlistData/>}
                {activeTab === 'profile' && <Profile/>}
                {activeTab === 'change-password' && <ChangePassword/>}
                {activeTab === 'address' && <Address/>}
            </div>
        </div>
    );
};

export default Dashboard;
