import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function FlowerSort({ titleFa, titleEn, products, sort }) {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] m-auto bg-white p-6 rounded-2xl shadow-sm mb-10 flex flex-col md:grid md:grid-cols-12 items-center">
      
      {/* بخش عنوان و دکمه */}
      <div className="w-full flex flex-col items-center text-center md:items-start md:text-right md:col-span-2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {titleFa}
        </h2>
        <p className="text-sm text-gray-500 mt-2">{titleEn}</p>

        <button
          onClick={() => navigate(`/ProductSortPage/${sort}`)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          مشاهده همه
        </button>
      </div>

      {/* بخش محصولات */}
      <div className="w-full md:col-span-10">
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
          className="mySwiper !m-auto !py-10"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                sort={item.sort}
                name={item.name}
                image={item.image}
                price={item.price}
                id={item.id}
                onAddToCart={() =>
                  console.log(`${item.name} به سبد خرید اضافه شد!`)
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FlowerSort;
