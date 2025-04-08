import React from 'react'
import images from '../utils/image'
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className='bg-black w-full h-full opacity-25 absolute bottom-0 top-0'></div>
      <img src={images.heroSlide} alt="" className='w-full h-screen object-cover' />
      <div className='flex flex-col gap-7 absolute bottom-14 text-white left-135 text-center px-7'>
        <h2 className='text-2xl'>MONCLER X MERCEDES-BENZ BY NIGO</h2>
        <h1 className='text-5xl'>ONLINE EXCLUSIVE PRE-LAUNCH</h1>
        <div className='flex items-center justify-center gap-6'>
          <button className='flex gap-2 items-center cursor-pointer'>SHOP NOW <RiArrowRightSLine className='text-xl' /></button>
          <button className='flex gap-2 items-center cursor-pointer'>DISCOVER MORE <RiArrowRightSLine className='text-xl'/></button>
        </div>
      </div>
    </div>
  )
}

export default Home