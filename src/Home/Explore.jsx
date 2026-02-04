import React from "react";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  إضاءة: "fa-lightbulb",
  بورتريه: "fa-user",
  "مناظر طبيعية": "fa-mountain",
  تقنيات: "fa-cog",
  معدات: "fa-camera",
};

export default function Explore({ categories }) {
  const navigate = useNavigate();

  if (!categories || categories.length === 0) {
    return null;
  }

  const handleCategoryClick = (categoryName) => {
    navigate('/blog', { state: { selectedCategory: categoryName } });
  };

  return (
    <>
      <section className="bg-[#161616] overflow-hidden">
        <div className="container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20 pt-12 sm:pt-14 lg:pt-16 gap-4 sm:gap-5 lg:gap-6 flex flex-col items-center text-center">
          <div className="px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20 w-fit">
            <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
            <div
              className="relative size-2 bg-proj rounded-full shrink-0
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-proj before:rounded-full before:animate-ping"
            ></div>
            <span className="text-xs sm:text-sm font-medium text-proj ms-1.5">
              التصنيفات
            </span>
          </div>

          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl px-4">
            استكشف حسب الموضوع
          </h2>

          <p className="text-gray-500 font-normal text-base sm:text-lg px-4">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className="group hover:border-proj hover:bg-proj transition-all duration-300 cursor-pointer bg-black/15 border rounded-xl sm:rounded-2xl border-black/15 py-4 sm:py-5 px-4 sm:px-5"
              >
                <div className="size-12 sm:size-14 rounded-xl sm:rounded-2xl border group-hover:border-white/20 group-hover:bg-white/20 transition-all duration-300 border-proj/10 bg-proj/10 flex items-center justify-center">
                  <i
                    className={`fa-solid ${categoryIcons[category.name] || "fa-cog"} text-base sm:text-lg group-hover:text-white transition-all duration-300 text-proj`}
                  ></i>
                </div>
                <h3 className="mt-3 sm:mt-4 text-start text-white text-base sm:text-lg font-semibold">
                  {category.name}
                </h3>
                <p className="mt-1.5 sm:mt-2 group-hover:text-white transition-all duration-300 text-start text-white/60 text-xs sm:text-sm">
                  {category.count} مقالة
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}