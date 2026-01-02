import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-blue-600 text-sm p-2 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-4'>
          <button className='bg-purple-500 p-1.5 text-sm rounded w-full'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask