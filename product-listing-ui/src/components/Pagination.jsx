import React from 'react'

const Pagination = () => {
  return (
    <div className='flex ml-150 mt-10 gap-3'>
      <button className='w-15 h-10 bg-blue-400 text-white'>Prev</button>
      <button className='w-15 h-10 bg-blue-400 text-white'>Curr</button>
      <button className='w-15 h-10 bg-blue-400 text-white'>Next</button>
    </div>
  )
}

export default Pagination
