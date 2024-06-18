import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import Button from '../../_ui/Button';
import SearchBox from './SearchBox';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";



const Header = () => {
    const [isAccountMenuVisible, setIsAccountMenuVisible] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [isOrderVisible, setIsOrderVisible] = useState(false)
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Notification',
            description: 'This is a notification',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&s'
        },
    ]);
    const [orders, setOrders] = useState([
        {
            id: 1,
            title: 'Notification',
            description: 'This is a notification',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&s'
        },
    ]);

    // functoin to open and close the account menu
    const handleAccountMenuClick = () => {
        setIsAccountMenuVisible(!isAccountMenuVisible);
        if (isNotificationVisible === true) {
            setIsNotificationVisible(!isNotificationVisible);
        }
        if (isOrderVisible === true) {
            setIsOrderVisible(!isOrderVisible)
        }
    }

    // function to open and close the notification
    const handleNotificationClick = () => {
        setIsNotificationVisible(!isNotificationVisible);
        if (isAccountMenuVisible === true) {
            setIsAccountMenuVisible(!isAccountMenuVisible);
        }
        if (isOrderVisible === true) {
            setIsOrderVisible(!isOrderVisible)
        }
    }

    const handleOrderClick = () => {
        setIsOrderVisible(!isOrderVisible);
        if (isAccountMenuVisible === true) {
            setIsAccountMenuVisible(!isAccountMenuVisible);
        }
        if (isNotificationVisible === true) {
            setIsNotificationVisible(!isNotificationVisible);
        }
    }

    // function to handle click to view all orders
    const handleViewNotifications = () => {
        console.log("View Notifications clicked");
    }

    const handleViewOrders = () => {
        console.log('VIew Orders here...')
    }

    return (
        <>
            <header className="flex items-center mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full h-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center w-full relative">
                        {/* Logo */}
                        <div className="left w-1/5">
                            <Link to="/" className="flex items-center">
                                <img src="/vite.svg" className="no-underline" width={50} />
                                <span className="ml-2 text-zinc-800 font-extrabold text-2xl">AMAN</span>
                            </Link>
                        </div>
                        {/* Search section */}
                        <div className='center w-2/5 flex items-center pl-4'>
                            <Button className="mr-3" text={<MdOutlineMenu size={20} />} />
                            <SearchBox />
                        </div>
                        {/* link icons section */}
                        <div className='right w-1/2 flex items-center justify-end pl-4'>
                            <Button className='mr-2 lg:mr-3' text={<MdLightMode size={20} />} />
                            <Button className='mr-2 lg:mr-3' onClick={handleOrderClick} text={<IoIosCart size={20} />} />
                            <Button className='mr-2 lg:mr-3' text={<MdEmail size={20} />} />
                            <Button className='mr-2 lg:mr-3' onClick={handleNotificationClick} text={<FaBell size={20} />} />

                            {/* Account Section */}
                            <div onClick={handleAccountMenuClick} className='acoountWrapper relative'>
                                <button className='account flex items-center active:bg-blue-200 px-2 py-1 rounded-lg hover:bg-blue-100 text-left capitalize'>
                                    <div className='userImg'>
                                        <span className='rounded-full flex items-center justify-center overflow-hidden w-10 h-10'>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&s" className='object-cover w-full' />
                                        </span>
                                    </div>
                                    <div className='userInfo pl-2'>
                                        <h4 className='text-[16px] font-medium text-black'>User Name</h4>
                                        <p className='text-[12px] opacity-70 text-black'>@username</p>
                                    </div>
                                </button>
                                {/* Account Menu */}
                                {isAccountMenuVisible && <div className='absolute flex flex-col gap-1 top-16 border right-0 bg-white w-[180px] shadow-xl rounded'>
                                    <Link className='flex items-center gap-2 cursor-pointer hover:bg-blue-50 active:bg-blue-200 rounded px-2 py-1'>
                                        <FaUser size={15} />
                                        <p>My Account</p>
                                    </Link>
                                    <Link className='flex items-center gap-2 cursor-pointer hover:bg-blue-50 active:bg-blue-200 rounded px-2 py-1'>
                                        <BsShieldLockFill size={15} />
                                        <p>Reset Password</p>
                                    </Link>
                                    <Link className='flex items-center gap-2 cursor-pointer hover:bg-blue-50 active:bg-blue-200 rounded px-2 py-1'>
                                        <IoIosLock className='text-red-600 -ml-1' size={20} />
                                        <p>Logout</p>
                                    </Link>
                                </div>}
                            </div>
                            {/* Notification menu */}
                            {isNotificationVisible &&
                                <div className='absolute flex flex-col gap-1 top-16 border right-32 bg-white w-[240px] shadow-xl rounded'>
                                    <h2 className='font-semibold p-2'>Notifications({notifications.length})</h2>
                                    <div className='bg-white max-h-60 overflow-y-scroll no-scrollbar flex flex-col gap-2'>
                                        {notifications.map(notification => (
                                            <div key={notification.id} className='cursor-pointer flex items-center p-2 gap-2 bg-gray-100 hover:bg-blue-50 active:bg-blue-200'>
                                                <span className='rounded-full overflow-hidden h-10 w-10'>
                                                    <img className='object-cover w-full' src={notification.img} alt={notification.title} />
                                                </span>
                                                <span className='pl-2'>
                                                    <h3 className='text-lg font-semibold'>{notification.title}</h3>
                                                    <p className='text-gray-700 opacity-80'>{notification.description}</p>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={handleViewNotifications} className='bg-blue-600 rounded-lg text-white'>View All Notifications</button>
                                </div>}
                            {/* Order menu here... */}
                            {isOrderVisible &&
                                <div className='absolute flex flex-col gap-1 top-16 border right-52 bg-white w-[240px] shadow-xl rounded'>
                                    <h2 className='font-semibold p-2'>Orders({orders.length})</h2>
                                    <div className='bg-white max-h-60 overflow-y-scroll no-scrollbar flex flex-col gap-2'>
                                        {orders.map(order => (
                                            <div key={order.id} className='cursor-pointer flex items-center p-2 gap-2 bg-gray-100 hover:bg-blue-50 active:bg-blue-200'>
                                                <span className='rounded-full overflow-hidden h-10 w-10'>
                                                    <img className='object-cover w-full' src={order.img} alt={order.title} />
                                                </span>
                                                <span className='pl-2'>
                                                    <h3 className='text-lg font-semibold'>{order.title}</h3>
                                                    <p className='text-gray-700 opacity-80'>{order.description}</p>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={handleViewOrders} className='bg-blue-600 rounded-lg text-white'>View All Orders</button>
                                </div>}
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;