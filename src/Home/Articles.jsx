import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Articles({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <>
      <section className="bg-black overflow-hidden">
        <div className="container w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 pb-18 pt-16">
          <div className="px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20 w-fit">
            <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
            <div
              className="relative size-2 bg-proj rounded-full shrink-0
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-proj before:rounded-full before:animate-ping"
            ></div>
            <span className="text-xs sm:text-sm font-medium text-proj ms-1.5">
              مميز
            </span>
          </div>

          <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-white mt-8">
            مقالات مختارة
          </h2>

          <div className="justify-between items-start sm:items-center  mt-8 flex flex-col sm: sm:flex-row gap-6">
            <p className="text-gray-500 text-base sm:text-lg">
              محتوي منتقي لبدء رحلة تعلمك
            </p>
            <NavLink
              to="/blog"
              className="group hover:-translate-y-0.5 px-5 py-2.5 transition-all duration-200 rounded-xl bg-proj flex items-center gap-1"
            >
              <span className="text-white font-semibold text-sm sm:text-base">
                عرض الكل
              </span>
              <i className="group-hover:-translate-x-1 transition-all duration-200 fa-solid text-white fa-angle-left font-semibold text-sm sm:text-base ms-1.5"></i>
            </NavLink>
          </div>

          <div className="mt-8 flex flex-col gap-8 items-center">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className="card cursor-pointer flex flex-col lg:flex-row overflow-hidden border border-white/20 group hover:border-proj/20 transition-all duration-300 rounded-2xl w-full"
              >
                <div className="relative overflow-hidden w-full lg:w-1/2">
                  <img
                    src={post.image}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-[103%] transition-all duration-300"
                    alt={post.title}
                  />
                  <div className="py-1.5 px-3 bg-linear-to-r from-orange-500 to-orange-400 rounded-full flex gap-2 items-center absolute top-5 right-5">
                    <i className="fa-solid fa-star text-white font-semibold text-[8px]"></i>
                    <span className="text-white font-semibold text-xs">
                      مميز
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 bg-[#161616] w-full lg:w-1/2">
                  <div className="flex gap-3 items-center flex-wrap">
                    <span className="py-1 px-3 rounded-full text-[12px] font-semibold text-proj border border-proj/50 bg-proj/10">
                      {post.category}
                    </span>
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-clock text-gray-500 text-sm"></i>
                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="mt-4 group-hover:text-proj transition-all duration-300 text-xl sm:text-2xl lg:text-3xl text-white font-bold">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm sm:text-base font-normal mt-5">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 sm:mt-12 lg:mt-15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative inline-block">
                        <img
                          src={post.author.avatar}
                          className="rounded-full border border-proj/20 size-10 sm:size-12"
                          alt={post.author.name}
                        />
                        <div className="absolute bottom-0 left-0 w-3 h-3 bg-proj rounded-full border border-[#161616]"></div>
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-white font-semibold text-sm">
                          {post.author.name}
                        </span>
                        <span className="text-gray-600 font-normal text-xs">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-1.5 items-center">
                      <span className="text-proj font-semibold text-sm group-hover:translate-x-1 transition-all duration-300">
                        إقرأ المقال
                      </span>
                      <i className="fa-solid fa-arrow-left text-proj font-semibold text-sm"></i>
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
