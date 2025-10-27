import React from "react";

import blog1 from "../assests/img/sort/blog1.webp";
import blog2 from "../assests/img/sort/blog2.webp";
import blog3 from "../assests/img/sort/blog3.webp";
import blog4 from "../assests/img/sort/blog4.webp";
import BlogCard from "./Blogcard";

function BlogList() {
  const blogs = [
    { id: 1, img: blog1, description: "گیاهان آپارتمانی مناسب راهرو با نور کم: معرفی ۲۲ گیاه + عکس" },
    { id: 2, img: blog2, description: "گیاهان آپارتمانی مقاوم به گرما: ۲۲ گیاه جذاب + شرایط" },
    { id: 3, img: blog3, description: "نکات کاربردی خرید تاج گل: ۱۰ نکته مهم + بایدها و نبایدها" },
    { id: 4, img: blog4, description: "بهترین گل فروشی‌های تهران: معرفی بهترین‌ها + عکس" },
  ];

  return (
    <div className="w-[90%] mx-auto my-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">آخرین مطالب</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
