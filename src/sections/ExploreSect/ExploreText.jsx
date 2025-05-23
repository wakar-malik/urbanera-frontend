import React from 'react'

const ExploreText = ({ btn, text }) => {
  return (
    <div className=' flex items-center flex-col absolute bottom-4 lg:bottom-15 left-0 w-full justify-center p-4 gap-7 lg:gap-5 uppercase text-white'>
      <h1 className='text-3xl lg:text-4xl xss:text-2xl xss:font-light'>{text}</h1>

      <div className='flex gap-6 text-sm xss:font-light'>{btn}</div>
    </div>
  )
}

export default ExploreText