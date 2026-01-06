import React from 'react'

const ImgCard = ({image,name}) => {
  return (
    <div className='bg-white shadow-md shadow-black/40 rounded-xl size-100 flex justify-center items-center'>
        <img 
            src={image} 
            alt={name}
            className='size-100 object-cover'
        />
    </div>
  )
}

export default ImgCard