import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import Navbar from '../sections/navbar/Navbar';
import Slides from '../utils/slides';
import Button from '../components/Button/Button';

export default function Hero() {

  const btnText = [
    'SHOP NOW',
    'DISCOVER MORE'
  ]

  return (
    <>
      <Navbar />
      <div className='h-screen'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          loop={true}
          modules={[EffectFade]}
          className="mySwiper"
        >
          {Slides.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.heroImg} />
              <div className='flex flex-col gap-7 absolute bottom-14 text-white left-135 text-center px-7 font-josefin'>
                <h2 className='text-2xl'>{item.subHeading}</h2>
                <h1 className='text-5xl'>{item.heading}</h1>
                <div className='flex items-center justify-center gap-6'>
                  {btnText.map((text, idx) => (<Button key={idx} text={text} />))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
