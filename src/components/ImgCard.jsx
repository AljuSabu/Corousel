import React from 'react'

const ImgCard = ({image,name}) => {
  return (
    <div className='bg-white shadow-md shadow-black/40 rounded-xl size-40 md:size-50 lg:size-50 xl:size-70 2xl:size-100 mb-5 md:mb-5 lg:mb-0 flex justify-center items-center'>
        <img 
          src={image} 
          alt={name}
          className='size-35 md:size-45 lg:size-45 xl:size-65 2xl:size-90 object-cover'
        />
    </div>
  )
}

export default ImgCard