import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import CompleteTask from '../TaskList/CompleteTask'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%] w-full flex flex-nowrap items-center justify-start gap-5  py-5  mt-10 overflow-x-auto'>
      {data.tasks.map((elem, idx) => {
        if(elem.active) {
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask) {
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed) {
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed) {
          <FailedTask key={idx} data={elem}/>
        }
      })}
      
    </div>
  )
}

export default TaskList
