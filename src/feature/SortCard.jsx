import React from "react";
import { useNavigate } from "react-router-dom";
function SortCard({ name = "تاج گل", image = "https://via.placeholder.com/200x250",sort }) {

const navigate=useNavigate()

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer bg-white rounded-2xl w-[70%] md:w-60 h-84 m-auto p-4"
    onClick={()=>navigate(`/ProductSortPage/${sort}`)}
    >
      
 
      <div className="group flex items-center justify-center w-[100%] md:w-44 h-56 rounded-[50%] p-2 transition-transform duration-300 hover:-translate-y-2"
           style={{ background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)" }}>
        
      
        <div className="flex items-center justify-center w-full h-full rounded-[50%] border-2 border-white p-1">
          
         
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-[50%] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.4)] transition-transform duration-300 "
          />
        </div>
      </div>

      
      <h3 className="text-center text-gray-700 text-lg font-semibold mt-3">
        {name}
      </h3>
    </div>
  );
}

export default SortCard;
