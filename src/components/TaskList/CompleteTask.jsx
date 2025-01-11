import React from 'react'

const CompleteTask = () => {
    const date=new Date;
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>High</h3>
                <h4 className='text-sm'>{date.toLocaleDateString()}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta unde velit quis iusto sed natus!
            </p>
            <div className='mt-2'>
                <button className='w-full'>Complete</button>
            </div>
       </div>
  )
}

export default CompleteTask
