import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ProductCard({
  sort,
  id,
  name = "گل رز قرمز",
  image = "https://via.placeholder.com/300x300",
  price = 250000,
}) {
  
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/ProductSortPage/${sort}?id=${id}`)}
      className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-3 m-auto  w-[90%] md:w-64 cursor-pointer"
    >
      <div className="w-full h-64 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-gray-800 text-lg font-semibold mt-3">{name}</h3>

      <div className="flex items-center justify-between w-full mt-3 px-2">
        <p className="text-green-600 text-base font-bold">
          {price.toLocaleString("fa-IR")} تومان
        </p>

        <div className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl transition-all duration-300 shadow-md">
          <FaCartShopping size={28} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
