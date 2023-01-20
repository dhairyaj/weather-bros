import React from 'react';
import { WiDaySunny, WiSunset, WiThermometer } from "react-icons/wi";
import { BsDropletHalf, BsWind } from 'react-icons/bs';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

function TemperatureDetails({ weather: { text, icon, temp_c, temp_f, wind_kph, humidity, feelslike_c, feelslike_f, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, sunrise, sunset }, units }) {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-white font-montserrat'>
                <p>{text}</p>
            </div>
            <div className='flex flex-row justify-between items-center text-white py-3 w-full'>
                <img src={icon} alt={text} className='w-18' />
                <p className='text-white text-4xl font-montserrat ml-16'>
                    {units === "metric" ? temp_c : temp_f}&deg;
                </p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm justify-center items-center'>
                        <WiThermometer size={20} className="mr-1" />
                        Real Feel:
                        <span className='font-medium font-montserrat ml-1'>{units === "metric" ? feelslike_c : feelslike_f}&deg;</span>
                    </div>
                    <div className='flex font-light text-sm justify-center items-center'>
                        <BsDropletHalf size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium font-montserrat ml-1'>{humidity}%</span>
                    </div>
                    <div className='flex font-light text-sm justify-center items-center'>
                        <BsWind size={20} className="mr-1" />
                        Wind:
                        <span className='font-medium font-montserrat ml-1'>{wind_kph} km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm my-3'>
                <WiDaySunny size={20} />
                <p className='font-light'>
                    Rise: <span className='font-medium font-montserrat ml-1'>{sunrise}</span>
                </p>
                <p className='font-extralight'>|</p>
                <WiSunset size={20} />
                <p className='font-light'>
                    Set: <span className='font-medium font-montserrat ml-1'>{sunset}</span>
                </p>
                <p className='font-extralight'>|</p>
                <FiArrowUp size={20} />
                <p className='font-light'>
                    High: <span className='font-medium font-montserrat ml-1'>{units === "metric" ? maxtemp_c : maxtemp_f}&deg;</span>
                </p>
                <p className='font-extralight'>|</p>
                <FiArrowDown size={20} />
                <p className='font-light'>
                    Low: <span className='font-medium font-montserrat ml-1'>{units === "metric" ? mintemp_c : mintemp_f}&deg;</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureDetails
