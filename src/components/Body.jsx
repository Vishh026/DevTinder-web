import React from 'react'
import axios from "axios"
import { BASE_URL } from '../utils/constant'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/reducers/userSlice'
import Feed from './Feed'

const Body = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store =>store.user)
    console.log(user)
    
    const fetchUser = async() => {
        if(user) return; //if user alredy present then don't make an API call
        try {
            const { data } = await axios.get(BASE_URL + "/profile/view",{
                withCredentials: true
            })
            
            dispatch(addUser(data.user))
        } catch (err) {
            if(err.status === 401){
                navigate('/login')
            }
            console.error(err)
        }
    }

    useEffect(()=> {
        
            fetchUser()
        
    },[])

  return (
    <div>
      <Feed />
    </div>
  )
}

export default Body
