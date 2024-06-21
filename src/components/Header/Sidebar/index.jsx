import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaBell } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [openSubmenuProduct, setOpenSubmenuProduct] = useState(false);

    const handleOpenProductSubmenu = () => {
        setOpenSubmenuProduct(!openSubmenuProduct);
    }

    return <>
        <div className="sidebar w-1/5 h-screen max-h-screen fixed top-20 left-0 bg-white overflow-y-scroll overflow-x-hidden no-scrollbar pb-10">
            <ul className='px-3 py-2'>
                <li className='list-none text-black'>
                    <Link to={'/'}>
                        <button className='w-full p-2 md:text-lg* opacity-90 font-[500] hover:bg-blue-100 active:bg-blue-200 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg'>
                            <span className="icon items-center opacity-90"> <MdDashboard size={20} /></span>
                            Dashboard
                            <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleRight /></span>
                        </button>
                    </Link>

                </li>
                <li onClick={handleOpenProductSubmenu} className='list-none text-black'>
                    <button className='w-full p-2 md:text-lg* opacity-90 font-[500] hover:bg-blue-100 active:bg-blue-200 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg'>
                        <span className="icon items-center opacity-90"> <AiFillProduct size={20} /></span>
                        Products
                        {openSubmenuProduct ? <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleDown /></span> : <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleRight /></span>}
                    </button>

                    {/* Submenu of Product */}
                    {openSubmenuProduct && <ul className='submenu'>
                        <li className='border-l-2 hover:border-blue-300'>
                            <button className='w-full p-2 md:text-lg* opacity-90 font-normal hover:text-blue-600 active:text-blue-300 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg md:pl-6'>

                                Product List

                            </button>
                        </li>
                        <li className='border-l-2 hover:border-blue-300'>
                            <button className='w-full p-2 md:text-lg* opacity-90 font-normal hover:text-blue-600 active:text-blue-300 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg md:pl-6'>

                                Product View

                            </button>
                        </li>
                        <li className='border-l-2 hover:border-blue-300'>
                            <button className='w-full p-2 md:text-lg* opacity-90 font-normal hover:text-blue-600 active:text-blue-300 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg md:pl-6'>

                                Product Upload

                            </button>
                        </li>
                    </ul>}
                </li>
                <li className='list-none text-black'>
                    <Link to={'/'}>
                        <button className='w-full p-2 md:text-lg* opacity-90 font-[500] hover:bg-blue-100 active:bg-blue-200 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg'>
                            <span className="icon items-center opacity-90"> <IoIosCart size={20} /></span>
                            Orders
                            <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleRight /></span>
                        </button>
                    </Link>
                </li>
                <li className='list-none text-black'>
                    <Link to={'/'}>
                        <button className='w-full p-2 md:text-lg* opacity-90 font-[500] hover:bg-blue-100 active:bg-blue-200 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg'>
                            <span className="icon items-center opacity-90"> <MdMessage size={20} /></span>
                            Message
                            <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleRight /></span>
                        </button>
                    </Link>
                </li>
                <li className='list-none text-black'>
                    <Link to={'/'}>
                        <button className='w-full p-2 md:text-lg* opacity-90 font-[500] hover:bg-blue-100 active:bg-blue-200 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg'>
                            <span className="icon items-center opacity-90"> <FaBell size={18} /></span>
                            Notifications
                            <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleRight /></span>
                        </button>
                    </Link>
                </li>
                <li className='list-none text-black'>
                    <Link to={'/'}>
                        <button className='w-full p-2 md:text-lg* opacity-90 font-[500] hover:bg-blue-100 active:bg-blue-200 duration-100 text-left flex items-center md:gap-3 gap-1 capitalize rounded-lg'>
                            <span className="icon items-center opacity-90"> <IoIosSettings size={22} /></span>
                            Settings
                            <span className="arrow flex items-center ml-auto justify-end opacity-90"><FaAngleRight /></span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    </>
};

export default Sidebar;