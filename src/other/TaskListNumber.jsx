import React from 'react'

const TaskListNumber = ({data}) => {
  const {newTask,completed,active,failed}=data.taskCounts
  return (
    <div className=' flex justify-between items-center gap-5 mt-10'>
      <div className='w-[45%] rounded-xl py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='w-[45%] rounded-xl py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
