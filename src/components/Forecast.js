import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Forecast({ title, weather, units }) {
    return (
        <div className='font-montserrat'>
            <div className='flex items-center justify-start mt-10'>
                <p className='text-white font-medium uppercase px-3'>{title}</p>
            </div>
            <hr className='my-2' />
            {title === "Hourly Forecast" ? (
                <div className='flex flex-row justify-between items-center text-white mb-8 overflow-hidden'>
                    <Splide options={{
                        perPage: 7,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                    }}>
                        {weather.map((element, index) => {
                            return (
                                <SplideSlide key={index}>
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className='font-extralight text-sm'>{element.time}</p>
                                        <img src={element.condition} alt={element.text} className='w-12 my-1' />
                                        <p className='font-medium'>{units === "metric" ? element.temperature_c : element.temperature_f}&deg;</p>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </div>
            ) : (<div className='flex flex-row justify-between items-center text-white mb-8 overflow-hidden'>
                {weather.map((element, index) => {
                    return (
                        <div className='flex flex-col items-center justify-center' key={index}>
                            <p className='font-extralight text-sm'>{element.time}</p>
                            <img src={element.condition} alt={element.text} className='w-12 my-1' />
                            <p className='font-medium'>{units === "metric" ? element.temperature_c : element.temperature_f}&deg;</p>
                        </div>
                    )
                })}
            </div>)}
        </div>
    )
}

export default Forecast
