import React from "react";

function BlogCardLarge({ img, description }) {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden w-full md:w-[45%] lg:w-[30%] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={img}
        alt={description}
        className="w-full h-64 md:h-80 lg:h-96 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">
          {description}
        </h3>
      </div>
    </div>
  );
}

export default BlogCardLarge;
