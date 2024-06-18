import React from 'react';
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


const Header = () => {
    return (
        <>
            <header className="flex items-center mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full h-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center w-full">
                        {/* Logo */}
                        <div className="left w-1/4">
                            <Link to="/" className="flex items-center">
                                <img src="/vite.svg" className="no-underline" width={50} />
                                <span className="ml-2 text-zinc-800 font-extrabold text-2xl">AMAN</span>
                            </Link>
                        </div>
                        <div className='center w-1/4 flex items-center pl-4'>
                            <Button className="mr-3" text={<MdOutlineMenu size={20} />} />
                            <SearchBox />
                        </div>
                        <div className='right w-1/2 flex items-center justify-end pl-4'>
                            <Button className='mr-2 lg:mr-3' text={<MdLightMode size={20} />} />
                            <Button className='mr-2 lg:mr-3' text={<IoIosCart size={20} />} />
                            <Button className='mr-2 lg:mr-3' text={<MdEmail size={20} />} />
                            <Button className='mr-2 lg:mr-3' text={<FaBell size={20} />} />

                            <div className='acoountWrapper'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;