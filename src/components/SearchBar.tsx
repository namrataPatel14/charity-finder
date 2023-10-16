import React from 'react'

import { useNavigate } from 'react-router-dom';





const SearchBar = () => {
    const navigate = useNavigate();
    return (
        <div className='relative'>
            <form >
                <input
                    onChange={(event) => navigate("/CharityList",{state:event.target.value})}
                    type='text'
                    className='focus:outline-none px-5 py-3  w-full bg-white rounded text-black'
                    placeholder='Find a charity'
                />
                <img className="w-5 absolute right-4 top-4" src="https://charity-finder.vitochan.com/assets/search-0775f889.svg" alt="search"></img>
            </form>
        </div>
    )
}

export default SearchBar