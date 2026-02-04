import React from "react";

export default function WeAreHeader() {
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
        <div className="px-3.5 py-2 flex gap-2.5 items-center bg-proj/10 rounded-full border border-proj/20">
          <div className="size-1.5 bg-proj rounded-full animate-pulse shrink-0"></div>
          <div
            className="relative size-2 bg-proj rounded-full shrink-0
                  before:content-[''] before:absolute before:inset-0 
                  before:bg-proj before:rounded-full before:animate-ping"
          ></div>
          <span className="text-xs sm:text-sm font-medium text-proj">من نحن</span>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug px-4">
          مهمتنا هي <span className="text-proj">الإعلام والإلهام</span>
        </h1>

        <p className="text-gray-400 font-normal text-base sm:text-lg lg:text-xl leading-tight px-4">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
          ونصائح عملية<br className="hidden sm:block" /> لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من<br className="hidden sm:block" /> خلال محتوى عالي الجودة.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 w-full sm:w-auto">
          <div className="rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10">
            <i className="fa-solid fa-folder text-2xl sm:text-3xl font-bold text-proj"></i>
            <span className="text-2xl sm:text-3xl font-bold text-proj">50+</span>
            <span className="text-gray-700 text-xs sm:text-sm font-bold">مقاله</span>
          </div>

          <div className="rounded-2xl hover:scale-[103%] transition-all duration-200 py-4 px-4 sm:px-8 lg:px-15 flex flex-col gap-1.5 items-center bg-black/50 border border-white/10">
            <i className="fa-solid fa-users text-2xl sm:text-3xl font-bold text-proj"></i>
            <span className="whitespace-nowrap text-2xl sm:text-3xl font-bold text-proj">
              +10 ألف
            </span>
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
  );
}