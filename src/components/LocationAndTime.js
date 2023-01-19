import React from 'react'

function LocationAndTime() {
    return (
        <div>
            <div className='flex justify-center items-center my-6'>
                <p className='text-white text-xl font-light font-montserrat'>
                    Thursday, 19 Jan 2023 | Local Time: 02:50 PM
                </p>
            </div>
            <div className='flex justify-center items-center my-6'>
                <p className='text-white text-4xl font-bold font-lobster italic'>Tokyo, Japan</p>
            </div>
        </div>
    )
}

export default LocationAndTime
