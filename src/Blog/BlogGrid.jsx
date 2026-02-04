import React, { useState } from "react";
import { Link } from "react-router-dom"; //

export default function BlogGrid({ posts, selectedCategory, searchText }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const postsPerPage = 6;

  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === null || post.category === selectedCategory;
    const matchSearch = post.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const safePage = currentPage > totalPages ? 1 : currentPage;

  const startIndex = (safePage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="bg-black">
      <div className="py-16 px-8 w-[85%] mx-auto">
        <div className="justify-between items-center flex">
          <span className="font-normal text-base text-gray-400">
            عرض{" "}
            <span className="font-bold text-white">{filteredPosts.length}</span>{" "}
            مقالات
            {selectedCategory && (
              <span className="font-semibold text-proj mr-2">
                {" "}
                في {selectedCategory}
              </span>
            )}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all cursor-pointer duration-300 w-9 h-9 flex items-center justify-center
                  ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                title="عرض شبكي"
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all cursor-pointer duration-300 w-9 h-9 flex items-center justify-center
                  ${viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                title="عرض قائمة"
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 ${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              : "flex flex-col gap-6 w-full"
          }`}
        >
          {currentPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className={`card cursor-pointer flex overflow-hidden border border-white/20 group hover:border-proj/20 transition-all duration-300 rounded-2xl
                ${viewMode === "grid" ? "flex-col" : "flex-row"}`}
            >
              <div
                className={`relative overflow-hidden shrink-0
                ${viewMode === "grid" ? "w-full" : "w-1/4"}`}
              >
                <img
                  src={post.image}
                  className={`object-cover group-hover:scale-[103%] transition-all duration-300
                    ${viewMode === "grid" ? "w-full h-full" : "w-full h-full"}`}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="py-1.5 px-3 bg-black/70 rounded-full flex gap-2 items-center absolute top-5 right-5">
                  <span className="text-white font-semibold text-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#161616] flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-2 items-center">
                      <i className="fa-regular fa-clock text-gray-500 text-sm"></i>
                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="mt-4 group-hover:text-proj transition-all duration-300 text-xl text-white font-bold line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm font-normal mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="relative inline-block">
                      <img
                        src={post.author.avatar}
                        className="rounded-full border border-proj/20 size-12"
                        alt={post.author.name}
                      />
                      <div className="absolute bottom-0 left-0 w-3 h-3 bg-proj rounded-full border border-[#161616]"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-white font-semibold text-sm">
                        {post.author.name}
                      </span>
                      <span className="text-gray-600 font-normal text-xs">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex size-9 group-hover:bg-proj group-hover:border-proj duration-300 transition-all justify-center rounded-full bg-proj/10 border border-proj/20 items-center">
                    <i className="fa-solid fa-arrow-left group-hover:text-white duration-300 transition-all text-proj font-semibold text-sm"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex gap-1 mx-auto justify-center mt-10">
          <button
            onClick={() => setCurrentPage(safePage - 1)}
            disabled={safePage === 1}
            className={`w-11 h-11 flex items-center justify-center rounded-lg border transition-all duration-300
              ${
                safePage === 1
                  ? "border-white/5 bg-[#161616] text-gray-600 cursor-not-allowed"
                  : "border-white/10 bg-[#161616] text-gray-400 hover:text-white hover:border-proj/20 cursor-pointer"
              }`}
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>

          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-11 h-11 flex cursor-pointer items-center justify-center rounded-lg border transition-all duration-300 text-base
                ${
                  safePage === num
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-[#161616] border-white/10 text-gray-400 hover:text-white hover:border-proj/20"
                }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(safePage + 1)}
            disabled={safePage === totalPages}
            className={`w-11 h-11 flex items-center justify-center rounded-lg border transition-all duration-300
              ${
                safePage === totalPages
                  ? "border-white/5 bg-[#161616] text-gray-600 cursor-not-allowed"
                  : "border-white/10 bg-[#161616] text-gray-400 hover:text-white hover:border-proj/20 cursor-pointer"
              }`}
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
