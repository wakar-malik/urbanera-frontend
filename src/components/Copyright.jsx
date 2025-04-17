import React from 'react'
import ICONS from '../utils/icons'


const Copyright = () => {

  const copyrightSocial = [
    ICONS.Facebook,
    ICONS.Youtube,
    ICONS.Instagram,
    ICONS.Twitter,
  ]

  return (
    <div className='flex items-center justify-between flex-col lg:flex-row border-t-1 border-gray-200 bg-[#F5F5F5] lg:max-h-6 py-5 px-8 border-box:'>
      <div className='flex gap-4 lg:gap-1 cursor-pointer'>
        {
          copyrightSocial.map((icon, index) => (
            <img className='w-10 lg:w-full my-18 lg:m-0' src={icon} alt="" key={index} />
          ))
        }
      </div>
        <div>
          <p className='font-light text-sm mb-3 lg:m-0 text-gray-600'>Copyright © 2000–2025 Urbanera All rights reserved.</p>
        </div>
        <div>
          <p className='font-light text-sm text-gray-600'>13.7.2-56231204.14658</p>
        </div>
      </div>
  )
}

export default Copyright