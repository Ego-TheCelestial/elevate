import React from 'react'

const BookCards = ({ book }) => {
  return (
    <div className='flex flex-col w-full max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-6 mb-6 hover:shadow-lg transition-shadow'>
      <h1 className='text-xl font-bold text-gray-800 mb-2'>{book.title}</h1>
      <p className='text-gray-600 mb-1'>Author: <span className='font-medium'>{book.author}</span></p>
      <p className='text-gray-600 mb-1'> <span className='font-medium'>{book.genre}</span></p>
      <p className='text-gray-600 mb-1'> PRICE: <span className='font-medium text-green'>{book.price}</span></p>
    </div>
  )
}

export default BookCards
