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
    <div className='w-full h-[95vh] lg:h-screen flex md:flex-row flex-col items-center gap-[1%] p-8 mt-0 2xl:mt-20 relative md:mt-15'>
      <div id="left-div" className='w-full h-full lg:basis-[49.5%] overflow-hidden relative'>
        <img src={images.staticImg1} className='object-cover w-full xs:h-full  sm:h-full transition-scale duration-1000 hover:scale-110' alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 pointer-events-none'></div>
        <ExploreText text={'women'} btn={btnText1.map((text, index) => (<Button key={index} text={text} />))} />
      </div>
      <div id="right-div" className='w-full lg:basis-[49.5%] h-full overflow-hidden relative'>
        <img src={images.staticImg2} className='object-cover w-full xs:h-full md:h-full transition-scale duration-1000 hover:scale-110' alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-25 pointer-events-none'></div>
        <ExploreText text={'men'} btn={btnText2.map((text, index) => (<Button key={index} text={text} />))} />
      </div>
    </div>
  )
}

export default ExploreSect2;