import React, { useState } from 'react'

const Header = ({data}) => {

  // const [username,setUsername]=useState('')

  // if(!data)
  // {
  //   setUsername('Admin')
  // }
  // else
  // {
  //   setUsername(data.firstName)
  // }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span> </h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header