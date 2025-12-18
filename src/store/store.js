import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import feedReducer from "./reducers/feedSlice"
import connectionReducer from "./reducers/ConnectionSlice"
import requestReducer from "./reducers/requestSlice"

const store = configureStore({
  reducer: {
    user : userReducer,
    feed : feedReducer,
    connections: connectionReducer,
    requests: requestReducer
  },
})

export default store