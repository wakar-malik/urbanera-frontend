import React from 'react'
import ExploreText from './ExploreText'
import images from '../../utils/image'
import Button from '../../components/Button/Button'
const ExploreSect2 = () => {
  const btnText1 = [
    'SHOP NOW',
    'DISCOVER MORE'
  ]

  const btnText2 = [
    'SHOP NOW',
    'DISCOVER MORE'
  ]

  return (
    <div className='w-full h-screen xss:h-[90vh] xs:h-[80vh] sm:h-[98vh] md:h-screen flex sm:flex-row xss:flex-col md:flex-row items-center gap-[1%] 2xl:p-8 xss:p-3 md:mt-0 lg:mt-0 2xl:mt-20 relative'>
      <div id="left-div" className='w-full 2xl:h-full lg:basis-[49.5%] sm:h-[75vh] overflow-hidden relative bg-red-500'>
        <img src={images.staticImg1} className='object-cover w-full xss:h-full sm:h-full transition-scale duration-1000 hover:scale-110' alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 pointer-events-none'></div>
        <ExploreText text={'women'} btn={btnText1.map((text, index) => (<Button key={index} text={text} />))} />
      </div>
      <div id="right-div" className='w-full 2xl:h-full lg:basis-[49.5%] sm:h-[75vh] overflow-hidden relative'>
        <img src={images.staticImg2} className='object-cover w-full xss:h-full sm:h-full transition-scale duration-1000 hover:scale-110' alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-25 pointer-events-none'></div>
        <ExploreText text={'men'} btn={btnText2.map((text, index) => (<Button key={index} text={text} />))} />
      </div>
    </div>
  )
}

export default ExploreSect2;