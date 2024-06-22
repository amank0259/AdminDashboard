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
    const [isMessageVisible, setIsMessageVisible] = useState(false)
    const [isSideMenuOpen, SetIsSideMenuOpen] = useState(false)
    const [isDarkToggle, setIsDarkToggle] = useState(false);
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
            title: 'Orders',
            description: 'This is a order',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&s'
        },
    ]);
    const [Messages, setMessages] = useState([
        {
            id: 1,
            title: 'Messages',
            description: 'This is a Message',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&s'
        },
    ]);

    // function to handle toggle side menu open and close icon
    const handleSideMenuClick = () => {
        SetIsSideMenuOpen(!isSideMenuOpen);
    }

    // functin to handle the toggle of dark and light mode icon
    const handleToggleDarkAndLight = () => {
        setIsDarkToggle(!isDarkToggle);
    }

    // function to open and close account menu
    const handleAccountMenuClick = () => {
        closeOtherMenus('account');
        setIsAccountMenuVisible(!isAccountMenuVisible);
    };

    // function to open and close Notifications
    const handleNotificationClick = () => {
        closeOtherMenus('notification');
        setIsNotificationVisible(!isNotificationVisible);
    };

    // function to open and close Orders
    const handleOrderClick = () => {
        closeOtherMenus('order');
        setIsOrderVisible(!isOrderVisible);
    };

    // function to open and close Messages
    const handleMessageClick = () => {
        closeOtherMenus('message');
        setIsMessageVisible(!isMessageVisible);
    };

    // function to close all other menu when one open
    const closeOtherMenus = (currentMenu) => {
        if (currentMenu !== 'account' && isAccountMenuVisible) {
            setIsAccountMenuVisible(false);
        }
        if (currentMenu !== 'notification' && isNotificationVisible) {
            setIsNotificationVisible(false);
        }
        if (currentMenu !== 'order' && isOrderVisible) {
            setIsOrderVisible(false);
        }
        if (currentMenu !== 'message' && isMessageVisible) {
            setIsMessageVisible(false);
        }
    };

    // function to handle click to view all notifications
    const handleViewNotifications = () => {
        console.log("View Notifications clicked");
    };

    // function to handle click to view all orders
    const handleViewOrders = () => {
        console.log('View Orders here...')
    };

    // function to handle click to view all orders
    const handleViewMessages = () => {
        console.log('View Messages here...')
    };

    return (
        <>
            <header className="flex items-center mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full h-20 fixed top-0 left-0 z-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center w-full relative">
                        {/* Logo */}
                        <div className="left w-1/6">
                            <Link to="/" className="flex items-center">
                                <img src="/vite.svg" className="no-underline" width={50} />
                                <span className="ml-2 text-zinc-800 font-extrabold text-2xl">AMAN</span>
                            </Link>
                        </div>
                        {/* Search section */}
                        <div className='center w-2/5 flex items-center pl-4'>
                            {isSideMenuOpen ? <Button className="mr-3" onClick={handleSideMenuClick} text={<MdOutlineMenuOpen size={20} />} /> : <Button className="mr-3" onClick={handleSideMenuClick} text={<MdOutlineMenu size={20} />} />
                            }
                            <SearchBox />
                        </div>
                        {/* link icons section */}
                        <div className='right w-1/2 flex items-center justify-end pl-4'>
                            {isDarkToggle ? <Button className='mr-2 lg:mr-3' onClick={handleToggleDarkAndLight} text={<MdDarkMode size={20} />} /> :
                                <Button className='mr-2 lg:mr-3' onClick={handleToggleDarkAndLight} text={<MdLightMode size={20} />} />
                            }
                            <Button className='mr-2 lg:mr-3' onClick={handleOrderClick} text={<IoIosCart size={20} />} />
                            <Button className='mr-2 lg:mr-3' onClick={handleMessageClick} text={<MdEmail size={20} />} />
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
                            {/* Message menu here... */}
                            {isMessageVisible &&
                                <div className='absolute flex flex-col gap-1 top-16 border right-40 bg-white w-[240px] shadow-xl rounded'>
                                    <h2 className='font-semibold p-2'>Messages({Messages.length})</h2>
                                    <div className='bg-white max-h-60 overflow-y-scroll no-scrollbar flex flex-col gap-2'>
                                        {Messages.map(message => (
                                            <div key={message.id} className='cursor-pointer flex items-center p-2 gap-2 bg-gray-100 hover:bg-blue-50 active:bg-blue-200'>
                                                <span className='rounded-full overflow-hidden h-10 w-10'>
                                                    <img className='object-cover w-full' src={message.img} alt={message.title} />
                                                </span>
                                                <span className='pl-2'>
                                                    <h3 className='text-lg font-semibold'>{message.title}</h3>
                                                    <p className='text-gray-700 opacity-80'>{message.description}</p>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={handleMessageClick} className='bg-blue-600 rounded-lg text-white'>View All Messages</button>
                                </div>}
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;