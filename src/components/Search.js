import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';

function Search({setQuery, units, setUnits}) {

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        let unformattedCityValue = e.target.value;
        const formattedCityvalue = unformattedCityValue.charAt(0).toUpperCase() + unformattedCityValue.slice(1);
        setCity(formattedCityvalue);
    }

    const handleSearch = () => {
        if(city !== "") {
            setQuery({q: city});
            setCity("");
        }
    };

    const toggleUnits = (e) => {
        setUnits(e.target.name);
    }

    const handleCurrentLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({q: `${lat},${lon}`});
            })
        }
    }

    return (
        <div className='flex flex-row justify-center items-center my-10'>
            <div className='flex flex-row w-3/4 justify-center items-center space-x-4'>
                <input type="text" placeholder='Seach for a city....' className='w-full p-2 font-normal text-xl shadow-2xl shadow-slate-800 focus:outline-none capitalize rounded-2xl px-4 font-montserrat' value={city} onChange={handleChange} />
                <BiSearchAlt size={30} className="text-white transition ease-in-out hover:scale-125 cursor-pointer" onClick={handleSearch} />
                <SlLocationPin size={30} className="text-white transition ease-in-out hover:scale-125 cursor-pointer" onClick={handleCurrentLocation} />
            </div>
            <div className='flex flex-row w-1/4 justify-center items-center'>
                <button name='metric' className={`transition ease-in-out hover:scale-125 ${units === 'metric' ? 'text-yellow-500 font-bold text-2xl' : 'text-white font-medium text-xl'} font-montserrat`} onClick={toggleUnits}>&deg;C</button>
                <p className='mx-2 font-thin text-white text-xl'>|</p>
                <button name='imperial' className={`transition ease-in-out hover:scale-125 ${units === 'imperial' ? 'text-yellow-500 font-bold text-2xl' : 'text-white font-medium text-xl'} font-montserrat`} onClick={toggleUnits}>&deg;F</button>
            </div>
        </div>
    )
}

export default Search
