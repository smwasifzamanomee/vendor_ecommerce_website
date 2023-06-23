import React, { useState } from 'react';
import DashboardData from './DashboardData';
import OrderData from './OrderData';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import Report from './Report';
import Customer from './Customer';
import ProductData from './ProductData';

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
                        className={activeTab === 'products' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('products')}
                    >
                        Products <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'orders' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('orders')}
                    >
                        Orders <hr className='border border-tertiary w-40'/>
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
                        className={activeTab === 'customer' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('customer')}
                    >
                        Customers <hr className='border border-tertiary w-40'/>
                    </li>
                    <li
                        className={activeTab === 'report' ? 'active text-primary py-2' : 'py-2'}
                        onClick={() => handleTabClick('report')}
                    >
                        Reports <hr className='border border-tertiary w-40'/>
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
                {activeTab === 'products' && <ProductData/>}
                {activeTab === 'orders' && <OrderData/>}
                {activeTab === 'profile' && <Profile/>}
                {activeTab === 'change-password' && <ChangePassword/>}
                {activeTab === 'customer' && <Customer/>}
                {activeTab === 'report' && <Report/>}
            </div>
        </div>
    );
};

export default Dashboard;
