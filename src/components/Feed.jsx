import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../store/reducers/feedSlice';
import UserCart from "./UserCart"

const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector(store => store.feed)
  console.log("feed",feed);
  
  const feedHandler = async() => {
    try {
      if(feed) return;
      const {data} = await axios.get(BASE_URL + "/user/feed",{
                withCredentials:true
            })
            console.log("feeddata",data?.users);
            
         dispatch(addFeed(data?.users))   
    } catch (err) {
      console.error(err.message);
      
    }
  }

  useEffect(()=> {
    feedHandler()
  },[])
  return (
    <div>
     {feed?.length > 0 && feed.map(users => (
      <UserCart user = {users} key= {users._id}/>
     ))}
    </div>
  )
}

export default Feed
