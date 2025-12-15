import React from 'react'
import axios from "axios"
import { BASE_URL } from '../utils/constant'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/reducers/userSlice'

const Body = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user.userInfo)
    console.log(user)
    
    const fetchUser = async() => {
        try {
            const { data } = await axios.get(BASE_URL + "/profile/view",{
                withCredentials:true
            })
            console.log(data);
            
            dispatch(addUser(data.user))
        } catch (err) {
            if(err.status === 401){
                navigate('/login')
            }
            console.error(err)
        }
    }

    useEffect(()=> {
        if(!user){
            fetchUser()
        }
    },[user,dispatch,navigate])

  return (
    <div>
      body
    </div>
  )
}

export default Body
