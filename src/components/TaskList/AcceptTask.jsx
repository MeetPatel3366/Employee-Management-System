import React from 'react'

const AcceptTask = ({data}) => {
    const { title,category,description,date}=data
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{category}</h3>
                <h4 className='text-sm'>{date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{title}</h2>
            <p className='text-sm mt-2'>
                {description}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
            </div>
       </div>
  )
}

export default AcceptTask
