import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-green-600 text-sm p-2 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-4'>
          <button className='bg-green-500 p-1.5 text-sm rounded w-full'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask