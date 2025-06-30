import React from 'react'

const ProductCard = ({ image, title, price, category }) => {
  return (
    <div className='flex flex-col gap-2 p-5 w-100 h-100 justify-center border'>
      <img className='w-50 h-50' src={image} alt={title} />
      <h1 className='text-lg font-bold'>{title}</h1>
      <p className='font-medium'>{category}</p>
      <h3 className='font-medium text-green-500'>{price}</h3>
    </div>
  )
}

export default ProductCard
