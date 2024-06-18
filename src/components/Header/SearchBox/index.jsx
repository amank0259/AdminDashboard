import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className='w-[400px] h-10 bg-blue-100 rounded-lg relative flex items-center py-1 px-3'>
            <IoSearchOutline className='mx-2 text-black' size={20} />
            <input type="text" className='bg-transparent border-[0px] outline-none px-1 text-[14px] text-black' placeholder='Search here...' />
        </div>
    )
}
export default SearchBox;