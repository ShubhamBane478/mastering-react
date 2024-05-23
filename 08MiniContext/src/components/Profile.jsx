import React,{useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {

    const {user} = useContext(UserContext);
    
    if(!user) return <div>Please Login</div>
    
    return <div>WelCome {user.username} and you password is {user.password}</div>
       
    
 
}

export default Profile