import { FiMail } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { Section3Item } from "./section-3-item";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

export const Section3 = () => {
    return (
    <>
    <div className="py-[120px] px-[150px]">
        <div className="container mx-auto ">
            <div className="grid grid-cols-3 gap-[40px]">
                <Section3Item
                icon={FiMail}
                title="Share team inboxes"
                desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                />
                <Section3Item
                icon={MdOutlineStackedLineChart}
                title="Analytics dashboard"
                desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                />
                <Section3Item
                icon={LuUser}
                title="Deliver instant answer"
                desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                />
            </div>
        </div>
    </div>
    
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 5,
            disableOnInteraction: false,
          }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>

    </>
    )
}