import React,{useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {

    const {user} = useContext(UserContext);
    
    if(!user) return <div className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Please Login</div>
    
    return <div className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Welcome {user.username} and you password is {user.password}</div>
       
    
 
}

export default Profile