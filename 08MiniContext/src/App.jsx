import './App.css'
import UserContextProvider from './context/UserContextProvider'

import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  
  return (
    <UserContextProvider>
      <h3>Context API </h3>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App