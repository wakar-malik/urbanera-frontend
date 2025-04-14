import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";

const Button = ({ text }) => {

  return (
    <div className='flex items-center justify-center gap-6'>
      <button className='flex gap-2 items-center cursor-pointer transition duration-200 hover:opacity-75'>{text}<RiArrowRightSLine className='text-xl xss:text-[14px] xss:font-light' /></button>
    </div>
  )
}

export default Button