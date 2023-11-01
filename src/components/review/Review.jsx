import Avatart from "../../assets/avatar.png";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Review() {
  return (
    <section id="review" className="container my-14 sm:my-18 2xl:my-24">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
        Customer Review
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={35}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
        }}
        className="mt-6 md:mt-12 text-center"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-xl shadow-default px-4 md:px-8 pb-8"
          >
            <div>
              <img
                src={Avatart}
                alt="Avatar"
                className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full object-cover mx-auto -mt-8"
              />

              <div className="space-y-2 mt-4">
                <h2 className="font-semibold text-base sm:text-[18px] md:text-[1.3rem] text-center">
                  Fiona Cameron
                </h2>
                <div className="flex items-center gap-1 text-yellow text-sm justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            <p className="text-light leading-relaxed mt-4 lg:mt-6 md:text-base text-[15px] text-dark_gray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              nihil deserunt porro praesentium, provident similique! Voluptates,
              deleniti. Dolorem nam placeat magni eum nihil hic fugiat expli.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Review;
