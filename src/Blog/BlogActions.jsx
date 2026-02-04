import React from "react";

export default function BlogActions({ selectedCategory, setSelectedCategory, searchText, setSearchText, categories }) {
  return (
    <div className="bg-black border-b border-b-white/20">
      <div className="py-4 px-4 sm:px-6 lg:px-8 w-full sm:w-[95%] lg:w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
          <div className="relative w-full lg:w-auto">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full lg:w-auto ps-12 pe-4 sm:pe-25 focus:border-proj focus:border-2 transition-all duration-300 py-3 rounded-xl border-2 border-white/20 bg-[#161616] placeholder:text-gray-500 text-white text-sm sm:text-base focus:outline-none"
              placeholder="ابحث في المقالات"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 items-center flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-2 cursor-pointer rounded-xl border transition-all duration-300
                ${selectedCategory === null
                  ? "bg-orange-500 border-orange-500"
                  : "bg-[#161616] border-white/20 hover:border-proj/20"
                }`}
            >
              <span className={`font-medium text-xs sm:text-sm ${selectedCategory === null ? "text-white" : "text-gray-400"}`}>
                جميع المقالات
              </span>
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 cursor-pointer rounded-xl border transition-all duration-300
                  ${selectedCategory === category
                    ? "bg-orange-500 border-orange-500"
                    : "bg-[#161616] border-white/20 hover:border-proj/20"
                  }`}
              >
                <span className={`font-medium text-xs sm:text-sm whitespace-nowrap ${selectedCategory === category ? "text-white" : "text-gray-400"}`}>
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}