import { useState } from 'react'
import CardsProps from "./Cards.jsx"


function TailwindProps() {
    return (
        <>
        <h1 classNameName="bg-green-400 text-white p-4 rounded-xl">Shubham</h1>
        <CardsProps userName="Shubham478" jobProfile="Wordpress Developer" btnTxt="View Profile"/>
        <CardsProps userName="Rohit" jobProfile="Senior Developer" btnTxt="Click Me"/>
        </>
    )
}


export default TailwindProps;