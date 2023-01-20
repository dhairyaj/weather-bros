import React from 'react'

function Forecast({ title, weather, units }) {
    return (
        <div className='font-montserrat'>
            <div className='flex items-center justify-start mt-10'>
                <p className='text-white font-medium uppercase px-3'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row justify-between items-center text-white mb-8'>
                {weather.map((element, index) => {
                    return (<div className='flex flex-col items-center justify-center' key={index}>
                        <p className='font-extralight text-sm'>{element.time}</p>
                        <img src={element.condition} alt={element.text} className='w-12 my-1' />
                        <p className='font-medium'>{units === "metric" ? element.temperature_c : element.temperature_f}&deg;</p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Forecast
