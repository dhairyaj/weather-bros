import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

function Search({setQuery, setUnits}) {

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        let unformattedCityValue = e.target.value;
        const formattedCityvalue = unformattedCityValue.charAt(0).toUpperCase() + unformattedCityValue.slice(1);
        setCity(formattedCityvalue);
    }

    const handleSearch = () => {
        if(city !== "") {
            setQuery({q: city});
        }
    };

    const toggleUnits = (e) => {
        console.log(e.target.name);
        setUnits(e.target.name);
    }

    return (
        <div className='flex flex-row justify-center items-center my-10'>
            <div className='flex flex-row w-3/4 justify-center items-center space-x-4'>
                <input type="text" placeholder='Seach for a city....' className='w-full p-2 font-light text-xl shadow-2xl shadow-slate-800 focus:outline-none capitalize rounded-2xl px-4 font-lobster' value={city} onChange={handleChange} />
                <BiSearchAlt size={30} className="text-white transition ease-in-out hover:scale-125 cursor-pointer" onClick={handleSearch} />
                <CiLocationOn size={30} className="text-white transition ease-in-out hover:scale-125 cursor-pointer" />
            </div>
            <div className='flex flex-row w-1/4 justify-center items-center'>
                <button name='metric' className='transition ease-in-out hover:scale-125 font-medium text-white text-xl font-montserrat' onClick={toggleUnits}>&deg;C</button>
                <p className='mx-2 font-thin text-white text-xl'>|</p>
                <button name='imperial' className='transition ease-in-out hover:scale-125 font-medium text-white text-xl font-montserrat' onClick={toggleUnits}>&deg;F</button>
            </div>
        </div>
    )
}

export default Search
