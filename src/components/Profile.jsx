import { useSelector } from "react-redux"
import EditForm from "./EditForm"
import UserPublicProfile from "./userPublicProfile"

const Profile = () => {
  const user = useSelector(store => store.user)
  
  return (
    user && <div>
      <EditForm user = {user}/>
    </div>
  )
}

export default Profile
