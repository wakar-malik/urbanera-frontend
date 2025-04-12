import React from 'react'
import images from '../../utils/image'
import Button from '../../components/Button/Button'

const StaticExplore = () => {
  const btnText = [
    'SHOP NOW',
    'DISCOVER MORE'
  ]
  const mainHeading = [
    {
      heading: "ONLINE EXCLUSIVE PRE-LAUNCH",
      subHeading: "MONCLER X MERCEDES-BENZ BY NIGO"
    }
  ]
  return (
    <div className='w-full h-screen relative'>
      <img src={images.heroSlide3} className='h-full w-full object-cover' alt="" />
      <div className='bg-black opacity-30 w-full h-screen absolute top-0 left-0'></div>
      {
        mainHeading.map((txt, index) => (
          <div className='flex flex-col items-center gap-2 absolute bottom-14 text-white text-center px-7 font-josefin w-full lg:gap-7' key={index}>
            <h2 className='lg:text-2xl xs:text-xl'>{txt.subHeading}</h2>
            <h1 className='lg:text-5xl xs:text-2xl'>{txt.heading}</h1>
            <div className='flex items-center justify-center gap-6 text-[12px] xs:text-[14px]'>
              {btnText.map((text, idx) => (<Button key={idx} text={text} />))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default StaticExplore