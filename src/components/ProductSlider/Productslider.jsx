import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation'
import "swiper/css";
import Button from '../Button/Button'
import images from "../../utils/image";

export default function App() {
  const outerSlides = [
    {
      title: 'URBANERA COLLECTION ',
      desc: 'Madara must-haver for both metropolitan and mountain lifestyles',
      img: images.thirdSliderImg1
    },
    {
      title: 'URBANERA COLLECTION ',
      desc: 'Madara must-haver for both metropolitan and mountain lifestyles',
      img: images.thirdSliderImg2
    },
    {
      title: 'URBANERA COLLECTION ',
      desc: 'Madara must-haver for both metropolitan and mountain lifestyles',
      img: images.thirdSliderImg3
    },
  ];





  return (
    <>
      <div className="p-0 md:px-4 lg:px-[30px]">
        <Swiper className="2xl:h-[82vh] flex gap-6 group" slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            400: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            500: {
              slidesPerView: 2.1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1.9,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {outerSlides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer xss:basis-[70%] md:basis-[33%] relative"
            >
              <img className="w-full h-full object-cover" src={slide.img} alt="card" />
              <div className="absolute top-0 left-0 bg-black h-full w-full opacity-30 group-hover:opacity-50 hover:opacity-0 transition-all duration-1500"></div>
              <div className=" w-full flex flex-col items-center px-2 gap-4 text-center absolute bottom-12 text-white">
                <h3 className="xs:text-lg lg:text-xl font-light">{slide.title}</h3>
                <p className="text-[16px] w-[65%] hidden leading-5 lg:block">{slide.desc}</p>
              <Button text='DISCOVER MORE' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
