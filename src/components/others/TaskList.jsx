import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] w-full flex flex-nowrap items-center justify-start gap-5  py-5  mt-10 overflow-x-auto'>
      <div className='shrink-0 h-full w-75 bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-blue-600 text-sm p-2 rounded'>Hello</h3>
          <h4 className='text-sm'>31 December 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, animi consequatur. Quo, accusantium. Architecto, fugit?</p>
      </div>
      <div className='shrink-0 h-full w-75 bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-green-600 text-sm p-2 rounded'>Hello</h3>
          <h4 className='text-sm'>31 December 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, animi consequatur. Quo, accusantium. Architecto, fugit?</p>
      </div>
      <div className='shrink-0 h-full w-75 bg-purple-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-purple-600 text-sm p-2 rounded'>Hello</h3>
          <h4 className='text-sm'>31 December 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, animi consequatur. Quo, accusantium. Architecto, fugit?</p>
      </div>
      <div className='shrink-0 h-full w-75 bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm p-2 rounded'>Hello</h3>
          <h4 className='text-sm'>31 December 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, animi consequatur. Quo, accusantium. Architecto, fugit?</p>
      </div>
    </div>
  )
}

export default TaskList
