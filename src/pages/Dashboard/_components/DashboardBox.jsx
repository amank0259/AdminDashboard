import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";

const DashboardBox = ({ bgColor, icon, title, count, arrowIcon }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('Last Month');

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
        setShowDropdown(false);  // Hide dropdown after selecting a period
    };

    return (
        <div className={`dashboardBox w-[47%] h-[200px] rounded-lg ${bgColor} relative`}>
            <div className="flex w-full">
                <div className="p-5 flex-col">
                    <h4 className='text-white text-2xl font-normal'>{title}</h4>
                    <span className='text-white text-4xl font-bold'>{count}</span>
                </div>
                <div className='ml-auto p-4'>
                    <span className='icon'>
                        {icon}
                    </span>
                </div>
            </div>
            <div className='py-8 px-5 flex items-center justify-between'>
                <h5 className='text-white text-xl font-medium'>{selectedPeriod}</h5>
                <span
                    className='hover:rounded-full hover:bg-blue-100 active:bg-blue-200 cursor-pointer p-2 hover:bg-opacity-50 relative'
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <BsThreeDotsVertical />
                    {showDropdown && (
                        <div className='absolute right-6 -bottom-15 z-10 bg-white min-w-[140px] rounded shadow-xl border'>
                            <button
                                className='flex items-center justify-start hover:bg-blue-100 active:bg-blue-200 w-full py-1'
                                onClick={() => handlePeriodChange('Last Day')}
                            >
                                <span className='px-2'><GiBackwardTime size={18} /></span>
                                <span>Last Day</span>
                            </button>
                            <button
                                className='flex items-center justify-start hover:bg-blue-100 active:bg-blue-200 w-full py-1'
                                onClick={() => handlePeriodChange('Last Week')}
                            >
                                <span className='px-2'><GiBackwardTime size={18} /></span>
                                <span>Last Week</span>
                            </button>
                            <button
                                className='flex items-center justify-start hover:bg-blue-100 active:bg-blue-200 w-full py-1'
                                onClick={() => handlePeriodChange('Last Month')}
                            >
                                <span className='px-2'><GiBackwardTime size={18} /></span>
                                <span>Last Month</span>
                            </button>
                            <button
                                className='flex items-center justify-start hover:bg-blue-100 active:bg-blue-200 w-full py-1'
                                onClick={() => handlePeriodChange('Last Year')}
                            >
                                <span className=' px-2'><GiBackwardTime size={18} /></span>
                                <span>Last Year</span>
                            </button>
                        </div>
                    )}
                </span>
            </div>
            <div className='absolute bottom-2 left-6'>
                <span className='backgroundIcon ml-6'>
                    {arrowIcon}
                </span>
            </div>
        </div>
    );
};

export default DashboardBox;
