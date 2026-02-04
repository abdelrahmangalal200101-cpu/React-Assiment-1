import React from "react";

export default function Blogheader() {
  return (
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
        <div className="px-3.5 py-2 flex gap-2 items-center bg-proj/10 rounded-full border border-proj/20">
          <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
          <i className="fa-solid fa-blog text-xs sm:text-sm font-medium text-proj"></i>
          <span className="text-xs sm:text-sm font-medium text-proj">
            مدونتنا
          </span>
        </div>

        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-snug px-4">
          إستكشف <span className="text-proj">مقالاتنا</span>
        </h1>

        <p className="text-gray-400/60 font-normal text-base sm:text-lg lg:text-[24px] leading-tight px-4">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}
