import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import productData from "../feature/ProductData";
import ProductCard from "../feature/ProductCard";
import { FaCartShopping } from "react-icons/fa6";
import LayOut from "../layout/LayOut";
import bg from "../assests/img/bg.jpg";
import useStore from "../store/GolStore";

function ProductSortPage() {
  const addToCart = useStore((state) => state.addToCart);
  const { sort } = useParams();
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));

  const filteredProducts = productData.filter((product) => product.sort === sort);
  const selectedProduct = filteredProducts.find((item) => item.id === id);

  return (
    <LayOut>
   
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-10">
        <img
          src={bg}
          alt={sort}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize">{sort}</h1>
        </div>
      </div>

      <div className="w-[95%] max-w-7xl m-auto">
        {selectedProduct ? (
        
          <div className="flex flex-col md:flex-row  justify-center items-center gap-8 bg-gray-50 py-8 px-4 md:px-12 rounded-2xl shadow-md">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-w-[400px] h-auto rounded-3xl shadow-lg object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-5 text-gray-800 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-green-700">{selectedProduct.name}</h1>
              <p className="text-gray-600 text-sm">{selectedProduct.code}</p>
              <p className="text-base sm:text-lg leading-relaxed">{selectedProduct.description}</p>

              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-1">نگهداری:</h3>
                <p className="text-gray-600">{selectedProduct.care}</p>
              </div>

              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {selectedProduct.price.toLocaleString("fa-IR")} تومان
              </p>

              <button
  onClick={() =>
    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
    })
  }
  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md w-full md:w-auto"
>
  <FaCartShopping size={20} />
  افزودن به سبد خرید
</button>
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                sort={item.sort}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">محصولی برای این دسته‌بندی یافت نشد.</p>
        )}
      </div>
    </LayOut>
  );
}

export default ProductSortPage;
