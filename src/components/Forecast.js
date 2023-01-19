import React from 'react'

function Forecast({ title }) {
    return (
        <div className='font-montserrat'>
            <div className='flex items-center justify-start mt-10'>
                <p className='text-white font-medium uppercase px-3'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row justify-between items-center text-white mb-8'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-extralight text-sm'>04:30 PM</p>
                    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="img" className='w-12 my-1' />
                    <p className='font-medium'>22&deg;</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast
