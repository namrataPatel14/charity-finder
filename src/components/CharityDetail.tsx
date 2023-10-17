import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import {useParams } from 'react-router-dom';

interface CharityDetailsType {
  name: string;
    description: string;
    coverImageUrl:string;
    descriptionLong:string;
    locationAddress:string;
}


const CharityDetail: React.FC = () =>  {
  const [charityDetails, setCharityDetails] = useState<CharityDetailsType | null>(null)
  
  const { id } = useParams();
 
  useEffect(() => {
    fetchCharity()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCharity = async () => {
    const baseURL = "https://partners.every.org/v0.2/nonprofit/"+ id +"?apiKey=pk_live_04cabb0a0235f0caf8eeb58ef7b00ba9"
   await axios.get(baseURL).then((response) => {
      setCharityDetails(response.data?.data?.nonprofit)
    });
  }

  const addToFav = () => {
    if (charityDetails) {
      
      const currentFavoritesString = localStorage.getItem('favourites');
  
   
      let currentFavorites: CharityDetailsType[] = [];
  
      if (currentFavoritesString) {
        try {
          currentFavorites = JSON.parse(currentFavoritesString);
          if (!Array.isArray(currentFavorites)) {
            currentFavorites = [];
          }
        } catch (error) {
          
          console.error('Error parsing favorites:', error);
          currentFavorites = [];
        }
      }
  
     
      currentFavorites.push(charityDetails);
  

      localStorage.setItem('favourites', JSON.stringify(currentFavorites));
    }
  }
  
  return (charityDetails === null) ? (<Loader />) : (
    <div className=' px-8 py-16 flex flex-col text-left'>
      <img src={charityDetails.coverImageUrl} alt={"cover"}/>
      <div className='flex pt-5 justify-between'>
        <div>
           <h2 className=' text-lg  font-bold '>{charityDetails.name}</h2>
          <p className=' text-base pt-1 pb-5 font-semibold'>{charityDetails.locationAddress}</p>
        </div>
        <div>
          <button onClick={addToFav} className=' text-center max-w-md w-full bg-green-800 text-white block px-10 py-3 hover:bg-green-900'>Add To Favourite</button>
        </div>
      </div>
   
      <p className=' text-sm pt-1 pb-5'>{charityDetails.descriptionLong}</p>
    </div>
  )
}

export default CharityDetail