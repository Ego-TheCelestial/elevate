import React from "react";

const Header = ({ setDisplayForm }) => {


  return (
    <div className='flex flex-row w-full h-50 justify-between align-center'>
      <h1>My DashBoard</h1>
      <button className='bg-blue-500 text-white h-10 w-25' onClick={() => setDisplayForm(true)}>Add Books</button>
    </div>
  )
}

export default Header
