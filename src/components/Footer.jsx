import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assests/img/logo.svg";
import insurance from "../assests/img/sort/insurance.svg";
import fast from "../assests/img/sort/fastSend.svg";
import health from "../assests/img/sort/health.svg";
import location from "../assests/img/sort/payLocation.svg";

function Footer() {
  const featureIcons = [
    { icon: insurance, text: "ضمانت کیفیت محصول" },
    { icon: fast, text: "ارسال سریع و به‌موقع" },
    { icon: health, text: "تضمین سلامت گیاه" },
    { icon: location, text: "ارسال به سراسر تهران" },
  ];

  const usefulLinks = [
    { path: "/bazaar-tehran", label: "بازارهای گل تهران" },
    { path: "/bazaar-mahalati", label: "بازار گل محلاتی" },
    { path: "/rose", label: "گل رز" },
    { path: "/nuts", label: "آجیل فروشی" },
    { path: "/vegetables", label: "تره‌بار" },
    { path: "/plaque", label: "پلاک اسم" },
  ];

  const quickLinks = [
    { path: "/order-wreath", label: "سفارش تاج گل" },
    { path: "/order-box", label: "سفارش باکس گل" },
    { path: "/order-bouquet", label: "سفارش دسته گل" },
    { path: "/order-basket", label: "سفارش سبد گل" },
    { path: "/order-proposal", label: "سفارش گل خواستگاری" },
    { path: "/faq", label: "پرسش‌های متداول" },
  ];

  const socials = [
    { path: "/instagram", label: "اینستاگرام", icon: <FaInstagram className="text-pink-500" /> },
    { path: "/telegram", label: "تلگرام", icon: <FaTelegramPlane className="text-sky-500" /> },
    { path: "/whatsapp", label: "واتس‌اپ", icon: <FaWhatsapp className="text-green-600" /> },
  ];

  return (
    <footer className="relative bg-gray-100 pt-32 mt-24 -mb-30">
      {/* کادر بالایی */}
     
      {/* فوتر اصلی */}
      <div className="bg-gray-300 pt-40 pb-10 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2  -translate-y-1/2 bg-white rounded-2xl shadow-md w-[70%] flex flex-wrap justify-around items-center p-6">
        {featureIcons.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-3 w-1/2 sm:w-1/4"
          >
            <img src={item.icon} alt="feature" className="w-14 h-14" />
            <p className="text-gray-700 text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>

        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-700">
          {/* ستون ۱ */}
          <div>
            <Link to="/">
              <img src={logo} alt="گل باما" className="w-40 mb-4" />
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-justify">
              گل فروشی گل باما: سفارش آنلاین انواع گل و گیاه زینتی و آپارتمانی،
              تاج گل، دسته گل، باکس گل، سبد گل برای مناسبت‎‌های مختلف نظیر گل
              ولنتاین و گل روز مادر با بهترین قیمت و ارسال فوری در شهر تهران.
            </p>

            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-green-700" />
              <span className="text-sm">
                بازار گل محلاتی، انتهای سالن سوم شرقی
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-700" />
              <span className="text-sm">09120284787</span>
            </div>
          </div>

          {/* ستون ۲ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              لینک‌های مفید
            </h3>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-green-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۳ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              میانبرهای کاربردی
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-green-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۴ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              شبکه‌های اجتماعی
            </h3>
            <ul className="space-y-3 text-sm">
              {socials.map((item) => (
                <li key={item.path} className="flex items-center gap-2">
                  {item.icon}
                  <Link to={item.path} className="hover:text-green-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۵ */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              همراه ما باشید
            </h3>
            <div className="flex gap-4 text-2xl">
              {socials.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:scale-110 transition-transform"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* خط پایین */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="text-green-700 hover:underline">
            GolBama
          </Link>{" "}
          | تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
