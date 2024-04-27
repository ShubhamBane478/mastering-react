import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <>
      <h1 className='bg-gray-600 text-white text-3xl p-4'>User : {userid}</h1>
    </>
  )
}


