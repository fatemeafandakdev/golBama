import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ id, img, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate("/blog");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-col items-center bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-[45%] lg:w-[22%] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        src={img}
        alt={description}
        className="w-full h-56 object-cover"
      />
      <p className="p-4 text-center text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default BlogCard;
