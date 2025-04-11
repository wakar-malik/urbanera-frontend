import React from 'react'
import { useSwiper } from 'swiper/react'
const NavigationBtn = () => {
  const swiper = useSwiper()
  return (
    <div className='w-full h-full absolute top-0 left-0 flex items-center justify-between z-10'>
      <button className=' w-6 text-base p-1 cursor-pointer' onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className=' w-6 text-base p-1 cursor-pointer' onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}

export default NavigationBtn;