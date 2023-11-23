import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CounterApp from "./components/CounterApp.jsx"; 
import TailwindProps from "./components/TailwindPropsApp.jsx"

import BgChanger from "./mini_projects/BgChanger.jsx" 
import PassGenratorApp from './mini_projects/PassGenratorApp.jsx'




function App() {
    return (
        <>
            {/* <CounterApp /> */}
            {/* <TailwindProps /> */}
            
            {/* <BgChanger/> */}
            <PassGenratorApp/>



        </>
    );
}

export default App
