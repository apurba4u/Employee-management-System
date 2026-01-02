import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData);

  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 rounded mt-5 overflow-auto h-[52%]'>
      <div className='border-red-400 border-3 mb-2 p-3 flex justify-between rounded '>
          <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
          <h5 className='text-lg font-medium w-1/5'>New Task</h5>
          <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
          <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
          <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
        </div>
      <div className=' h-[80%] overflow-auto'>
        {userData.map((elem, idx) => {
        return <div key={idx} className='border-2 border-emerald-500 mb-2 p-3 flex justify-between rounded '>
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h5 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h5>
          <h5 className='text-lg font-medium w-1/5 text-purple-600'>{elem.taskCounts.active}</h5>
          <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
          <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
      })}
      </div>
    </div>
    
  )
}

export default AllTask
