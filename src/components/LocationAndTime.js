import React from 'react'
import { formatToLocalTime } from '../services/weatherServices'

function LocationAndTime({weather: {name, country, tz_id, localtime_epoch}}) {
    return (
        <div>
            <div className='flex justify-center items-center my-6'>
                <p className='text-white text-xl font-light font-montserrat'>
                    {formatToLocalTime(localtime_epoch, tz_id)}
                </p>
            </div>
            <div className='flex justify-center items-center my-6'>
                <p className='text-white text-4xl font-bold font-lobster italic'>{`${name}, ${country}`}</p>
            </div>
        </div>
    )
}

export default LocationAndTime
