import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
        radial-gradient(circle at center, rgba(255,100,50,0.15), transparent 70%),
        linear-gradient(rgba(38,38,38,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38,38,38,0.5) 1px, transparent 1px)
      `,
            backgroundSize: "100% 100%, 60px 60px, 60px 60px",
            backgroundColor: "#000000",
          }}
        />

        <div className="container w-full sm:w-[90%] lg:w-[77%] mx-auto px-4 sm:px-6 pb-15 flex flex-col gap-5 items-center mt-20 text-center">
          <div className="px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20">
            <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
            <div
              className="relative size-2 bg-proj rounded-full shrink-0
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-proj before:rounded-full before:animate-ping"
            ></div>
            <span className="text-xs sm:text-sm font-medium text-white">
              مرحبا بك في عدسة
            </span>
          </div>

          <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-snug">
            إكتشف <span className="text-proj">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-gray-400/60 font-normal text-base sm:text-lg lg:text-[24px] leading-tight px-4">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br className="hidden sm:block" />
            التصوير.
          </p>

          {/* الأزرار - تحت بعض في الشاشات الصغيرة */}
          <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">
            <NavLink
              to="/blog"
              className="group hover:-translate-y-0.5 px-8 py-4 transition-all duration-200 rounded-full bg-proj flex items-center gap-1 w-full sm:w-auto justify-center"
            >
              <span className="text-white font-semibold text-sm sm:text-base">
                إستكشف المقالات
              </span>
              <i className="group-hover:-translate-x-1 transition-all duration-200 fa-solid text-white fa-arrow-left font-semibold text-sm sm:text-base ms-1.5"></i>
            </NavLink>
            <NavLink
              to="/weare"
              className="group px-8 py-4 hover:border-proj hover:bg-proj/10 transition-all duration-200 rounded-full flex items-center gap-1 bg-transparent border border-white/10 w-full sm:w-auto justify-center"
            >
              <i className="group-hover:text-proj transition-all duration-200 fa-solid fa-circle-info text-sm sm:text-base text-semibold text-white me-1"></i>
              <span className="group-hover:text-proj transition-all duration-200 text-white font-semibold text-sm sm:text-base">
                إعرف المزيد
              </span>
            </NavLink>
          </div>

          {/* الإحصائيات - 2 في كل صف للشاشات الصغيرة */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 w-full sm:w-auto">
            <div className="rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10">
              <i className="fa-solid fa-folder text-2xl sm:text-3xl font-bold text-proj"></i>
              <span className="text-2xl sm:text-3xl font-bold text-proj">50+</span>
              <span className="text-gray-700 text-xs sm:text-sm font-bold">مقاله</span>
            </div>
            <div className="rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10">
              <i className="fa-solid fa-users text-2xl sm:text-3xl font-bold text-proj"></i>
              <span className="whitespace-nowrap text-2xl sm:text-3xl font-bold text-proj">+10 ألف</span>
              <span className="text-gray-700 text-xs sm:text-sm font-bold">قارئ</span>
            </div>
            <div className="rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10">
              <i className="fa-solid fa-file text-2xl sm:text-3xl font-bold text-proj"></i>
              <span className="text-2xl sm:text-3xl font-bold text-proj">4</span>
              <span className="text-gray-700 text-xs sm:text-sm font-bold">تصنيفات</span>
            </div>
            <div className="rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10">
              <i className="fa-solid fa-pen text-2xl sm:text-3xl font-bold text-proj"></i>
              <span className="text-2xl sm:text-3xl font-bold text-proj">6</span>
              <span className="text-gray-700 text-xs sm:text-sm font-bold">كاتب</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}