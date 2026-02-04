import React from "react";

export default function Subs() {
  return (
    <>
      <section className="bg-[#0A0A0A] overflow-hidden">
        <div className="container w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 pb-20 pt-16 sm:pt-20 lg:pt-30">
          <div className="mt-8 w-full sm:w-[90%] lg:w-[70%] mx-auto p-6 sm:p-10 lg:p-16 rounded-2xl bg-[#161616] border border-white/10">
            <div className="flex flex-col gap-6 sm:gap-8 items-center">
              <div className="p-4 sm:p-5 bg-proj rounded-2xl flex items-center justify-center">
                <i className="fa-solid fa-envelope text-xl sm:text-2xl text-white font-semibold"></i>
              </div>

              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white text-center">
                إشترك في <span className="text-proj">نشرتنا الإخباريه</span>
              </h2>

              <p className="text-gray-400 text-base sm:text-lg font-normal text-center px-4">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>

              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full max-w-2xl">
                <input
                  type="email"
                  placeholder="ادخل بريدك الإلكتروني"
                  className="py-3 sm:py-4 px-4 sm:px-5 border w-full sm:flex-1 border-white/20 focus:border-proj outline-none text-white bg-black rounded-xl sm:rounded-2xl placeholder:text-gray-500 placeholder:text-base sm:placeholder:text-lg placeholder:font-normal transition-all duration-300"
                />
                <button
                  type="submit"
                  className="py-3 sm:py-4 px-6 sm:px-8 w-full sm:w-auto bg-proj hover:bg-proj/80 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl text-white font-semibold text-base sm:text-lg whitespace-nowrap"
                >
                  إشترك الآن
                </button>
              </form>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 w-full items-center">
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-users text-proj text-sm"></i>
                  <span className="text-gray-400 text-xs sm:text-sm font-normal">
                    انضم ل{" "}
                    <span className="text-white font-semibold">1000+</span> مصور
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-shield-halved text-proj text-sm"></i>
                  <span className="text-gray-400 text-xs sm:text-sm font-normal">
                    بدون ازعاج
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-arrow-right-from-bracket text-proj text-sm"></i>
                  <span className="text-gray-400 text-xs sm:text-sm font-normal">
                    إلغاء الاشتراك في أي وقت
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
