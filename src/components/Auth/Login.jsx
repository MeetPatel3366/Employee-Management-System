import React from 'react'

const Login = () => {
  const submitHandler=(event)=>{
    event.preventDefault(); 
    console.log("Form is Submitted");
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 rounded-2xl p-20'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3'>
          <input className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" required placeholder='Enter Your Email' />
          <input className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type="password" required placeholder='Enter Password' />
          <button className='border-2 bg-emerald-600 rounded-full mt-5 py-3 px-5 text-xl outline-none  placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
