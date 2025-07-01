import React from 'react'

const Filter = ({ setSortMethod }) => {
  return (
    <div className='flex flex-row w-full justify-between'>
      <input className='border-black' type="text" placeholder='Search Books' />
      <select name="" id="" onChange={(e) => setSortMethod(e.target.value)}>
        <option value="sort-books">Sort Books</option>
        <option value="low-high">Price: Low - High</option>
        <option value="high-low">Price: High - Low</option>
        <option value="name">By Title</option>
      </select>
    </div>
  )
}

export default Filter
