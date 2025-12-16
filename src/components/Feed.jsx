import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';

const Feed = () => {
  const feedHandler = async() => {
    try {
      const {data} =await axios.get(BASE_URL + "/feed",{
                withCredentials:true
            })
            console.log("feed",data)
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(()=> {
    feedHandler()
  },[])
  return (
    <div>
      feed
    </div>
  )
}

export default Feed
