import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SortCard from "./SortCard";
import sortData from "./SortData";

function SortFlower() {
 

  return (
    <div className="w-[80%] bg-white m-auto p-6 rounded-2xl shadow-sm my-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="mySwiper !pb-10"
      >
        {sortData.map((item) => (
          <SwiperSlide key={item.id}>
            <SortCard name={item.name} image={item.image}  sort={item.sort}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SortFlower;
