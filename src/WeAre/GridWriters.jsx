import React from "react";

export default function GridWriters({ posts }) {
  return (
    <>
      <section className="bg-black overflow-hidden border-t border-b border-t-white/20 border-b-white/20">
        <div className="container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-18 gap-4 flex flex-col items-center text-center">
          <div className="px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20">
            <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
            <span className="text-xs sm:text-sm font-medium text-proj">فريقنا</span>
          </div>

          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            كتابنا
          </h1>

          <p className="text-gray-400 font-normal text-base sm:text-lg leading-tight px-4">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>

          {/* Grid متجاوب - 1 عمود في الموبايل، 2 في التابلت، 3 في الشاشات الكبيرة */}
          <div className="mt-6 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-[#161616] border group border-white/10 hover:border-proj/20 transition-colors p-5 sm:p-6 gap-1 rounded-2xl flex flex-col items-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/20 group-hover:border-proj/20 transition-colors overflow-hidden mb-3 sm:mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  {post.author.name}
                </h3>

                <p className="text-proj text-xs sm:text-sm mb-3 sm:mb-4">
                  {post.author.role}
                </p>

                <div className="flex gap-2 sm:gap-2.5 items-center">
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <i className="fab fa-linkedin text-white text-sm sm:text-base"></i>
                  </a>

                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-black transition-all"
                  >
                    <i className="fab fa-github text-white text-sm sm:text-base"></i>
                  </a>

                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-proj transition-colors"
                  >
                    <i className="fab fa-twitter text-white text-sm sm:text-base"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
