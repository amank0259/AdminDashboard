import React, { useState } from "react";
import DashboardBox from "./_components/DashboardBox";
import { FaUsers, FaShoppingBag, FaStar, } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { BsThreeDotsVertical, BsTransparency } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { Chart } from "react-google-charts";
import { TbBackground } from "react-icons/tb";



export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    isStacked: true,
    height: 240,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
    'backgroundColor': 'transparent'
};


const Dashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('Total Sales');
    const [price, setPrice] = useState('$3,787,681.00');

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
        setShowDropdown(false);  // Hide dropdown after selecting a period
    };

    return (
        <div className="dashboard py-24 md:pl-8 pl-2 lg:pl-8 w-full">
            <div className="flex flex-row flex-wrap">
                <div className="w-full md:w-2/3 lg:w-2/3">
                    <div className="dashboardWrapper flex gap-5 w-full flex-wrap">
                        <DashboardBox
                            icon={<FaUsers size={36} style={{ opacity: 0.5 }} />}
                            title="Total Users"
                            count="277"
                            bgColor="bg-gradient-to-r from-green-600 to-green-400 via-green-500"
                            arrowIcon={<FaArrowTrendUp size={130} style={{ opacity: 0.1 }} />}
                        />
                        <DashboardBox
                            icon={<IoMdCart size={36} style={{ opacity: 0.5 }} />}
                            title="Total Orders"
                            count="338"
                            bgColor="bg-gradient-to-r from-purple-600 to-purple-400 via-purple-500"
                            arrowIcon={<FaArrowTrendDown size={130} style={{ opacity: 0.1 }} />}
                        />
                        <DashboardBox
                            icon={<FaShoppingBag size={36} style={{ opacity: 0.5 }} />}
                            title="Total Products"
                            count="557"
                            bgColor="bg-gradient-to-r from-indigo-600 to-indigo-400 via-indigo-500"
                            arrowIcon={<FaArrowTrendDown size={130} style={{ opacity: 0.1 }} />}
                        />
                        <DashboardBox
                            icon={<FaStar size={36} style={{ opacity: 0.5 }} />}
                            title="Total Reviews"
                            count="166"
                            bgColor="bg-gradient-to-r from-yellow-600 to-yellow-400 via-yellow-500"
                            arrowIcon={<FaArrowTrendUp size={130} style={{ opacity: 0.1 }} />}
                        />
                    </div>
                </div>
                <div className="md:w-[30%] w-full">
                    <div className="box w-full h-full rounded-lg bg-gradient-to-b from-blue-800 to-blue-400 px-5">
                        <div className="pt-8 flex items-center justify-between">
                            <h4 className="text-white text-lg md:text-2xl font-normal">{selectedPeriod}</h4>
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
                        <div className="py-4 flex flex-col">
                            <h3 className="text-white text-xl md:text-xl lg:text-3xl font-bold flex items-end gap-2">
                                {price}
                                <span className="text-sm">40.5% </span>
                                <span>{<FaArrowTrendUp size={18} />}</span>
                            </h3>
                            <span className="text-white font-semibold pt-1 opacity-50">{price} {selectedPeriod}</span>
                        </div>
                        <div className="w-full h-60 overflow-hidden">
                            <Chart
                                chartType="AreaChart"
                                width="100%"
                                height="100%"
                                data={data}
                                options={options}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
