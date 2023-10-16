import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Favourite = () => {
  const [favoriteData, setFavoriteData] = useState<CharityDetailsType | null>(null);

  interface CharityDetailsType {
    map(arg0: (favorite: any, index: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
    name: string;
    description: string;
    coverImageUrl: string;
    descriptionLong: string;
    location: string;
  }

  useEffect(() => {

    const favoriteDataString = localStorage.getItem('favourites');

    if (favoriteDataString) {
      const parsedData = JSON.parse(favoriteDataString);
      setFavoriteData(parsedData);
    }
  }, []);
  console.log(favoriteData, "favoriteData")
  return (
    <div className=' px-20 pb-24 pt-14'>
      {favoriteData !== null ? (<div className=' grid  grid-cols-3 gap-10'>{
        favoriteData.map((favorite, index) => (
          <Link key={favorite.ein} to={"/charity/" + favorite.ein}>
            <div key={index} className=' shadow-md rounded border border-gray-100 text-left min-h py-5 px-4
           bg-white hover:bg-slate-100 transition-all hover:shadow-2xl'>
              <div className=' flex items-center'>

                <img src={favorite.logoUrl ? favorite.logoUrl : "https://upload.wikimedia.org/wikipedia/commons/c/c4/Globe_icon.svg"} alt="logo" className=' w-10 h-fit mb-3' />
                <p className=' mb-3 text-base font-semibold ml-3'>
                  {favorite.name}
                </p>
              </div>
              <hr />
              <div className='flex items-top'>
                <img src="https://charity-finder.vitochan.com/assets/location-846b6e1a.svg" alt="location" className=' w-5 h-fit mt-3' />

                <p className=' mt-3 text-sm ml-1'>{favorite.locationAddress}</p>

              </div>

            </div>
          </Link>
        ))
      }</div>) : (
        <p>No favorite data available.</p>
      )}
    </div>
  );
}

export default Favourite;
