import React from "react";
import logo from "./assets/Images/logo-GdqARQRt.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#161616] border-t border-t-gray-500 border-b border-b-gray-500">
        <div className="w-full sm:w-[90%] lg:w-[83%] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* القسم الأول - Logo و Description */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <img
                  src={logo}
                  className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_20px_rgba(255,165,0,0.4)]"
                  alt="عدسه logo"
                />
                <h5 className="text-lg sm:text-xl font-bold text-white">
                  عدسه
                </h5>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
            </div>

            <div className="flex gap-3 items-center">
              {["x", "linkedin", "github", "youtube"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1c1c1c]
                             border border-white/5 rounded-lg hover:bg-proj
                             hover:scale-110 transition-all duration-300
                             cursor-pointer group"
                >
                  <i
                    className={`fab fa-${icon} text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {/* القسم الثاني - استكشف */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-0.5 bg-proj"></div>
                <h3 className="text-white text-base sm:text-lg font-bold">
                  استكشف
                </h3>
              </div>

              <ul className="flex flex-col gap-3 sm:gap-5">
                {["الرئيسية", "المدونة", "من نحن"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 text-gray-400 text-xs sm:text-sm
                                 hover:text-proj transition-all duration-300 group"
                    >
                      <i
                        className="fa-solid fa-chevron-left text-[8px] sm:text-[10px] absolute right-0
                                   opacity-0 translate-x-2
                                   group-hover:opacity-100
                                   group-hover:translate-x-0
                                   transition-all duration-300"
                      ></i>

                      <span className="inline-block group-hover:-translate-x-5 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* القسم الثالث - التصنيفات */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-0.5 bg-proj"></div>
                <h3 className="text-white text-base sm:text-lg font-bold">
                  التصنيفات
                </h3>
              </div>

              <ul className="flex flex-col gap-3 sm:gap-5">
                {["إبداع", "بورتريه", "مناظر طبيعية", "تقنيات"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 text-gray-400 text-xs sm:text-sm
                                 hover:text-proj transition-all duration-300 group"
                    >
                      <i
                        className="fa-solid fa-chevron-left text-[8px] sm:text-[10px] absolute right-0
                                   opacity-0 translate-x-2
                                   group-hover:opacity-100
                                   group-hover:translate-x-0
                                   transition-all duration-300"
                      ></i>

                      <span className="inline-block group-hover:-translate-x-5 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* القسم الرابع - النشرة الإخبارية */}
          <div className="flex flex-col justify-between h-full gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-0.5 bg-proj"></div>
                <h3 className="text-white text-base sm:text-lg font-bold">
                  ابقى على اطلاع
                </h3>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="ادخل بريدك الإلكتروني"
                className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1c1c1c] border border-white/10
                         rounded-lg text-white text-xs sm:text-sm
                         placeholder:text-gray-600
                         focus:outline-none focus:border-proj/50
                         transition-colors"
              />
              <button
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-proj text-white text-xs sm:text-sm font-medium
                               rounded-lg hover:bg-proj/90 transition-colors"
              >
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#161616]">
        <div className="px-4 sm:px-8 lg:px-32 py-6 sm:py-8 lg:py-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <span className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
            © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart text-proj"></i>{" "}
            جميع الحقوق محفوظة.
          </span>
          <div className="flex gap-6 sm:gap-10 items-center">
            <span className="text-gray-500 text-xs sm:text-sm hover:text-proj cursor-pointer duration-300 transition-all">
              سياسة الخصوصيه
            </span>
            <span className="text-gray-500 text-xs sm:text-sm hover:text-proj cursor-pointer duration-300 transition-all">
              شروط الخدمه
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
