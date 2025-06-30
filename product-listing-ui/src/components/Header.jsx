import React from 'react'

const Header = ({searchTerm, setSearchTerm, searchedData}) => {


  return (
    <div className='flex flex-row justify-around'>
      <div>
        <h1 className='text-3xl mb-3 mt-2 font-bold'>My Products</h1>
      </div>
      <div className='flex flex-row gap-1 mt-2'>
        <input className='border-black h-10' type="text" placeholder='Search Product' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <button className='bg-blue-500 text-white w-20 h-10' onClick={searchedData}>Search</button>
      </div>
    </div>
  )
}

export default Header;