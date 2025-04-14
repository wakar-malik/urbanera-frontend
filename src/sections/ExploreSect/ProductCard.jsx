import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation'
import NavigationBtn from "../../components/Button/Navigation/NavigationBtn";
import "swiper/css";
import { useState } from "react";
import images from "../../utils/image";

export default function App() {
  const outerSlides = [
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'green'
      ]
    },
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'yellow'
      ]
    },
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'green'
      ]
    },
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'green'
      ]
    },
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'green'
      ]
    },
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'green'
      ]
    },
    {
      title: 'UrbanArea Mercedes-Benz by Nigo Orus Down Field Jacket',
      price: '1245.00',
      imgs: [
        images.sliderImage1,
        images.sliderImage2,
        images.sliderImage3,
      ],
      colors: [
        'red',
        'blue',
        'green'
      ]
    },

  ];

  const [activeIndex, setActiveIndex] = useState(null); // keep track of which slide is active



  return (
    <>
      <div className="flex flex-col gap-2 items-center mt-10 lg:mt-24">
        <h1 className="text-xl lg:text-4xl xs:text-2xl 2xl:font-normal xs:font-light">EXPLORE THE COLLECTION</h1>
        <p className="text-sm">SHOP NOW</p></div>
      <Swiper className="py-15 relative h-auto 2xl:h-[85vh] xl:h-[70vh] lg:h-[60vh]" slidesPerView={4} spaceBetween={15}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        <div className="absolute top-0 right-4 w-25 mt-1"><NavigationBtn /></div>
        {outerSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="flex flex-col  mt-10 2xl:first-of-type:ml-8 xss:first-of-type:ml-3 w-full"
          >
            <Swiper
              className=""
              cssMode={true}
              spaceBetween={5}
              pagination={true}
              modules={[Navigation, Pagination]}
            >
              {slide.imgs.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt="slide" className="w-full object-cover" />
                </SwiperSlide>
              ))}
              <div className={`${activeIndex === index ? 'block' : 'hidden'}`}>
                <NavigationBtn />
              </div>
            </Swiper>
            <div className=" w-full flex flex-col items-start gap-2 mt-7 text-start">
              <h3 className="text-sm 2xl:font-normal xss:font-light">{slide.title}</h3>
              <span className="text-sm  2xl:font-bold xss:font-light">${slide.price}</span>
              <div className="flex gap-1">
                {
                  slide.colors.map((color, idex) => (
                    <span className={`w-3 h-3 inline-block`} key={idex} style={{ background: color }}></span>
                  ))
                }
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
