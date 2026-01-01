import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='h-40 w-[45%] bg-blue-400 p-8 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-green-400 p-8 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='h-40 w-[45%] bg-purple-400 p-8 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
      </div>
      <div className='h-40 w-[45%] bg-red-400 p-8 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
