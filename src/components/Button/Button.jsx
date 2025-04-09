import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";

const Button = ({ text }) => {

  return (
    <div className='flex items-center justify-center gap-6'>
      <button className='flex gap-2 items-center cursor-pointer transition duration-200 hover:text-gray-400'>{text}<RiArrowRightSLine className='text-xl' /></button>
    </div>
  )
}

export default Button