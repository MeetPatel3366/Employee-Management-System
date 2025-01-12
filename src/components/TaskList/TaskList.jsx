import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {

  return (
    <div id='tasklist' className='flex items-center justify-start gap-7 overflow-x-auto flex-nowrap h-[55%] w-full py-5 mt-10'>
        {data.tasks.map((curTask,id)=>{
            if(curTask.newTask)
            {
                return <NewTask key={id} data={curTask}/>
            }
            if(curTask.active)
            {
                return <AcceptTask key={id} data={curTask}/>
            }
            if(curTask.completed)
            {
                return <CompleteTask key={id} data={curTask}/>
            }
            if(curTask.failed)
            {
                return <FailedTask key={id} data={curTask}/>
            }
        })}
    </div>
  )
}

export default TaskList
