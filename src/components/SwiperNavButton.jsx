import { useSwiper } from "swiper/react";
// react icons
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute z-50 top-[80%] right-20 flex gap-4 ">
      <button
        onClick={() => swiper.slidePrev()}
        className="btn rounded-full bg-opacity-30 text-white hover:bg-[rgba(255, 255, 255, 0.20)] hover:text-black "
      >
        <BsArrowLeft className=""></BsArrowLeft>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="btn rounded-full bg-[#FF3811] hover:bg-[#FF3811] border-none text-white"
      >
        <BsArrowRight className=""></BsArrowRight>
      </button>
    </div>
  );
};

export default SwiperNavButton;
