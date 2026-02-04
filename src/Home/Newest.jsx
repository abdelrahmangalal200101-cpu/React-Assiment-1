import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Newest({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <>
      <section className="bg-black overflow-hidden">
        <div className="container w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-18 pt-12 sm:pt-14 lg:pt-16">
          <div className="px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20 w-fit">
            <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
            <div
              className="relative size-2 bg-proj rounded-full shrink-0
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-proj before:rounded-full before:animate-ping"
            ></div>
            <span className="text-xs sm:text-sm font-medium text-proj ms-1.5">الأحدث</span>
          </div>

          <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white mt-6 sm:mt-8">
            أحدث المقالات
          </h2>

          <div className="justify-between items-start sm:items-center mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
            <p className="text-gray-500 text-base sm:text-lg">
              محتوى جديد طازج من المطبعة
            </p>
            <NavLink
              to="/blog"
              className="group px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 rounded-xl bg-proj flex items-center gap-1 self-start sm:self-auto"
            >
              <span className="text-white font-semibold text-sm sm:text-base">
                عرض جميع المقالات
              </span>
              <i className="group-hover:-translate-x-1 transition-all duration-200 fa-solid text-white fa-angle-left font-semibold text-sm sm:text-base ms-1.5"></i>
            </NavLink>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id} 
                className="card hover:-translate-y-1.5 cursor-pointer flex flex-col overflow-hidden border border-white/20 group hover:border-proj/20 transition-all duration-300 rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-[103%] transition-all duration-300"
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="py-1.5 px-3 bg-black/70 rounded-full flex gap-2 items-center absolute top-4 sm:top-5 right-4 sm:right-5">
                    <span className="text-white font-semibold text-[10px] sm:text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-[#161616] flex-1 flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-clock text-gray-500 text-xs sm:text-sm"></i>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="mt-3 sm:mt-4 group-hover:text-proj transition-all duration-300 text-lg sm:text-xl text-white font-bold line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm font-normal mt-2 sm:mt-3 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 sm:mt-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative inline-block">
                        <img
                          src={post.author.avatar}
                          className="rounded-full border border-proj/20 size-10 sm:size-12"
                          alt={post.author.name}
                        />
                        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-proj rounded-full border border-[#161616]"></div>
                      </div>
                      <div className="flex flex-col gap-0.5 sm:gap-1">
                        <span className="text-white font-semibold text-xs sm:text-sm">
                          {post.author.name}
                        </span>
                        <span className="text-gray-600 font-normal text-[10px] sm:text-xs">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex size-8 sm:size-9 group-hover:bg-proj group-hover:border-proj duration-300 transition-all justify-center rounded-full bg-proj/10 border border-proj/20 items-center">
                      <i className="fa-solid fa-arrow-left group-hover:text-white duration-300 transition-all text-proj font-semibold text-xs sm:text-sm"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}