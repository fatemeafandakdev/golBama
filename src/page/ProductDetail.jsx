import React from "react";
import { useSearchParams } from "react-router-dom";
import productData from "../feature/ProductData";
import { FaCartShopping } from "react-icons/fa6";

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));

  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg ">
        محصول مورد نظر یافت نشد 😕
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-blue-950 ">
      {/* تصویر محصول */}
      <div className="w-full md:w-1/2 flex justify-center ">
        <img
          src={product.image}
          alt={product.name}
          className="w-[400px] h-[400px] rounded-3xl shadow-lg object-cover"
        />
      </div>

      {/* جزئیات محصول */}
      <div className="w-full md:w-1/2 space-y-5 text-gray-800 ">
        <h1 className="text-3xl font-bold text-green-700">{product.name}</h1>
        <p className="text-gray-600 text-sm">{product.code}</p>

        <p className="text-lg leading-relaxed">{product.description}</p>

        <div>
          <h3 className="font-semibold text-lg text-gray-700 mb-1">نگهداری:</h3>
          <p className="text-gray-600">{product.care}</p>
        </div>

        <p className="text-2xl font-bold text-green-600">
          {product.price.toLocaleString("fa-IR")} تومان
        </p>

        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md">
          <FaCartShopping size={24} />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
