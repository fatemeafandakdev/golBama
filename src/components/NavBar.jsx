import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assests/img/logo.svg";
import { Link } from "react-router-dom";
import sortData from "../feature/SortData";
import useStore from "../store/GolStore";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
const cart = useStore((state) => state.cart);
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav dir="rtl" className="w-full shadow-md px-4 md:px-6 py-3 md:py-4 flex flex-wrap md:flex-nowrap justify-between items-center font-[Vazirmatn] bg-white relative">

      {/* لوگو */}
      <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 md:h-12" />
        </Link>

        {/* دکمه همبرگر موبایل */}
        <button className="md:hidden text-2xl text-purple-700" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* منوی لینک‌ها */}
      <ul className={`flex flex-col md:flex-row gap-4 md:gap-6 font-semibold text-purple-900 w-full md:w-auto md:justify-start md:flex ${menuOpen ? "flex" : "hidden"} absolute md:static top-full left-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-20`}>
        <li><Link to="/" className="hover:text-purple-600 transition block py-1 md:py-0">خانه</Link></li>
        <li className="relative group">
  <span className="hover:text-purple-600 transition cursor-pointer block py-1 md:py-0">دسته‌بندی</span>

  {/* Submenu بزرگ و افقی */}
  <div className="absolute -left-500 top-full mt-2 w-[96%] m-auto lg:w-[900px] bg-white border border-purple-300 rounded-md shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-30 p-4">
    <ul className="grid grid-cols-2 lg:flex   gap-4">
      {sortData.map((item, idx) => (
        <li key={idx} className="flex-1   hover:scale-105 transition-transform duration-300">
          <Link
            to={`/productSortPage/${item.sort}`}
            className="flex flex-col items-center gap-2 border border-purple-300 rounded-3 bg-purple-50 rounded-xl p-4 hover:bg-purple-100 shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain rounded-full"
            />
            <span className="text-purple-900 font-semibold text-lg h-20">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</li>


        <li><Link to="/" className="hover:text-purple-600 transition block py-1 md:py-0">گل آپارتمانی</Link></li>
        <li><Link to="/" className="hover:text-purple-600 transition block py-1 md:py-0">گل روز مادر</Link></li>
        <li><Link to="/blog" className="hover:text-purple-600 transition block py-1 md:py-0">بلاگ</Link></li>
      </ul>

      {/* جستجو و آیکون‌ها */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
        {/* سرچ */}
        <div className="relative w-full md:w-52">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full border border-purple-400 rounded-full pr-8 pl-3 py-1.5 text-sm md:text-lg focus:outline-none focus:ring-1 focus:ring-purple-200"
          />
          <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 text-base md:text-xl" />
        </div>

        {/* ورود / ثبت‌نام */}
        <div className="flex items-center gap-1 md:gap-2 border border-purple-400 px-2 md:px-3 py-1 rounded-full cursor-pointer hover:bg-purple-200 transition text-sm md:text-base">
          <FaUser className="text-purple-600 text-base md:text-xl" />
          <Link to={"/login"}> <span className="font-medium text-purple-800">ورود / ثبت‌نام</span></Link>
        </div>

        {/* سبد خرید */}
       {/* سبد خرید */}
<div className="relative flex items-center gap-1 md:gap-2 border border-purple-400 px-2 md:px-3 py-1 rounded-full cursor-pointer hover:bg-purple-200 transition text-sm md:text-base">
  <FaShoppingCart className="text-purple-600 text-base md:text-xl" />
  
  {/* شمارنده */}
  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {totalItems}
    </span>
  )}

  <Link to={"/basket"} className="font-medium text-purple-800">
    سبد خرید
  </Link>
</div>

      </div>
    </nav>
  );
}

export default NavBar;
