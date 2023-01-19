import React from 'react';
import { WiDaySunny, WiSunset, WiThermometer } from "react-icons/wi";
import { BsDropletHalf, BsWind } from 'react-icons/bs';
import {FiArrowUp, FiArrowDown} from 'react-icons/fi';

function TemperatureDetails() {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-white font-montserrat'>
                <p>Clear</p>
            </div>
            <div className='flex flex-row justify-between items-center text-white py-3 w-full'>
                <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-18' />
                <p className='text-white text-4xl font-montserrat ml-16'>
                    34&deg;
                </p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm justify-center items-center'>
                        <WiThermometer size={20} className="mr-1" />
                        Real Feel:
                        <span className='font-medium font-montserrat ml-1'>32&deg;</span>
                    </div>
                    <div className='flex font-light text-sm justify-center items-center'>
                        <BsDropletHalf size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium font-montserrat ml-1'>65%</span>
                    </div>
                    <div className='flex font-light text-sm justify-center items-center'>
                        <BsWind size={20} className="mr-1" />
                        Wind:
                        <span className='font-medium font-montserrat ml-1'>11 km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm my-3'>
                <WiDaySunny size={20} />
                <p className='font-light'>
                    Rise: <span className='font-medium font-montserrat ml-1'>06:45 AM</span>
                </p>
                <p className='font-extralight'>|</p>
                <WiSunset size={20} />
                <p className='font-light'>
                    Set: <span className='font-medium font-montserrat ml-1'>06:45 PM</span>
                </p>
                <p className='font-extralight'>|</p>
                <FiArrowUp size={20} />
                <p className='font-light'>
                    High: <span className='font-medium font-montserrat ml-1'>50&deg;</span>
                </p>
                <p className='font-extralight'>|</p>
                <FiArrowDown size={20} />
                <p className='font-light'>
                    Low: <span className='font-medium font-montserrat ml-1'>12&deg;</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureDetails
