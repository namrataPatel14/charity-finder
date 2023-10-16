import React from 'react'
import SearchBar from './SearchBar'
import { Link, useNavigate } from 'react-router-dom'

const Header = ( ) => {
    const navigate = useNavigate();
    const navigateToFav = () =>{
        navigate("/Favourite")
    }
    return (
        <div className=' flex justify-between items-center px-8 py-4 bg-slate-700 text-white'>
            <Link to={"/"}><div className='flex items-center'>
                <img className='w-14' src="https://charity-finder.vitochan.com/assets/icon-98e2ff09.svg" alt="logo" />
                <span className=' pl-2 font-semibold'>Charity Finder</span>
            </div></Link>
            <div className=' max-w-xl w-full'><SearchBar /></div>
            <div className=' h-12 w-12 rounded-full bg-white flex justify-center' onClick={navigateToFav}>
                <img className='w-5' src=" https://charity-finder.vitochan.com/assets/heart-9fc34c01.svg" alt="like" />
            </div>
        </div>
    )
}

export default Header