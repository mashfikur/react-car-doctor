// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, A11y } from "swiper/modules";

// importing slider
import slide1 from "../../assets/images/banner/1.jpg";
import slide2 from "../../assets/images/banner/2.jpg";
import slide3 from "../../assets/images/banner/3.jpg";
import slide4 from "../../assets/images/banner/4.jpg";
import slide5 from "../../assets/images/banner/5.jpg";
import slide6 from "../../assets/images/banner/6.jpg";
import SwiperNavButton from "../SwiperNavButton";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="relative rounded-xl w-full h-[37.5rem]  mx-auto ">
        <div className="rounded-xl">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            navigation={false}
            modules={[Navigation, Autoplay, A11y]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-[100%] rounded-xl object-cover max-h-[37.5rem] mx-auto"
                src={slide1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] rounded-xl object-cover max-h-[37.5rem] mx-auto"
                src={slide2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] rounded-xl object-cover max-h-[37.5rem] mx-auto"
                src={slide3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] rounded-xl object-cover max-h-[37.5rem] mx-auto"
                src={slide4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] rounded-xl object-cover max-h-[37.5rem] mx-auto"
                src={slide5}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] rounded-xl object-cover max-h-[37.5rem] mx-auto"
                src={slide6}
                alt=""
              />
            </SwiperSlide>

            {/* slider text  */}

            <div className="absolute rounded-xl bg-gradient-to-r from-[#151515]  w-full h-full text-white top-0 flex pl-20 flex-col items-start justify-center left-0 z-10 transform space-y-7 ">
              <h3 className="text-[3.75rem] leading-normal font-bold ">
                Affordable <br /> Price For Car <br /> Servicing
              </h3>
              <p className="text-start font-normal capitalize">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-[#FF3811] border-none hover:bg-[#FF3811] text-white">
                  Discover More
                </button>
                <button className="btn btn-outline text-white ">
                  Discover More
                </button>
              </div>
            </div>
            {/* slider button */}
            <SwiperNavButton></SwiperNavButton>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
