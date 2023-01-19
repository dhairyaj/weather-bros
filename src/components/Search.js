import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

function Search() {
    return (
        <div className='flex flex-row justify-center items-center my-10'>
            <div className='flex flex-row w-3/4 justify-center items-center space-x-4'>
                <input type="text" placeholder='Seach for a city....' className='w-full p-2 font-light text-xl shadow-2xl shadow-slate-800 focus:outline-none capitalize rounded-2xl px-4 font-lobster' />
                <BiSearchAlt size={30} className="text-white transition ease-in-out hover:scale-125 cursor-pointer" />
                <CiLocationOn size={30} className="text-white transition ease-in-out hover:scale-125 cursor-pointer" />
            </div>
            <div className='flex flex-row w-1/4 justify-center items-center'>
                <button name='metric' className='transition ease-in-out hover:scale-125 font-medium text-white text-xl font-montserrat'>&deg;C</button>
                <p className='mx-2 font-thin text-white text-xl'>|</p>
                <button name='imperial' className='transition ease-in-out hover:scale-125 font-medium text-white text-xl font-montserrat'>&deg;F</button>
            </div>
        </div>
    )
}

export default Search
