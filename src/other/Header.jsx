import React from 'react'

const Header = ({data}) => {
  
  // console.log("head",data);
  
  // const [username,setUsername]=useState('')

  // if(!data)
  // {
  //   setUsername('Admin')
  // }
  // else
  // {
  //   setUsername(data.firstName)
  // }

  const logOutUser=()=>{
      localStorage.setItem('loggedInUser','')
      window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> user👋</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header