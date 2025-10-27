import React from "react";

import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import useStore from "../store/GolStore";
import LayOut from "../layout/LayOut";

function Basket() {
  const { cart, increment, decrement, removeFromCart } = useStore();

  if (cart.length === 0)
    return <p className="text-center mt-10 text-gray-500">سبد خرید خالی است</p>;

  return (
    <LayOut>
    <div className="w-[90%] max-w-4xl mx-auto mt-10 space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-md"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-600">
                {item.price.toLocaleString("fa-IR")} تومان
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decrement(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
            >
              <FaMinus />
            </button>
            <span className="px-3">{item.quantity}</span>
            <button
              onClick={() => increment(item.id)}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
            >
              <FaPlus />
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      <div className="text-right font-bold text-xl mt-4">
        مجموع:{" "}
        {cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toLocaleString("fa-IR")}{" "}
        تومان
      </div>
    </div>
    </LayOut>
  );
}

export default Basket;
