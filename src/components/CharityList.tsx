import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import Loader from './Loader';

const CharityList = () => {
  const [charity, setCharity] = useState([]);
  const [loader, setloader] = useState(true)
  const location = useLocation();


  useEffect(() => {

    if (location.state) {
      const baseURL = "https://partners.every.org/v0.2/search/" + location.state + "?apiKey=pk_live_04cabb0a0235f0caf8eeb58ef7b00ba9"
      const getData = setTimeout(() => {
        axios.get(baseURL).then((response) => {
          setCharity(response.data?.nonprofits)
          setloader(false)
        });
      }, 1000)

      return () => clearTimeout(getData)
    } else {
      setCharity([])
    }
  }, [location.state, loader])


  console.log(charity)
  return (
    <div className=' px-20 pb-24 pt-14'>
      {
        !loader ? <div className=' grid  grid-cols-3 gap-10'>
          {
            charity.map((charity: {
              ein: any; logoUrl: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; location: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
            }, index: React.Key | null | undefined) => (
              <Link key={charity.ein} to={"/charity/" + charity.ein}>
                <div key={index} className=' shadow-md rounded border border-gray-100 text-left min-h py-5 px-4
           bg-white hover:bg-slate-100 transition-all hover:shadow-2xl'>
                  <div className=' flex items-center'>

                    <img src={charity.logoUrl ? charity.logoUrl : "https://upload.wikimedia.org/wikipedia/commons/c/c4/Globe_icon.svg"} alt="logo" className=' w-10 h-fit mb-3' />
                    <p className=' mb-3 text-base font-semibold ml-3'>
                      {charity.name}
                    </p>
                  </div>
                  <hr />
                  <div className='flex items-top'>
                    <img src="https://charity-finder.vitochan.com/assets/location-846b6e1a.svg" alt="location" className=' w-5 h-fit mt-3' />

                    <p className=' mt-3 text-sm ml-1'>{charity.location}</p>

                  </div>

                </div>
              </Link>
            ))
          }
        </div> : <Loader />
      }

    </div>
  )
}

export default CharityList;