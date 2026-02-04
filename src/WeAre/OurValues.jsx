import React from "react";

export default function OurValues() {
  return (
    <>
      <section className="bg-[#111111] overflow-hidden border-t border-b border-t-white/20 border-b-white/20px">
        <div className="container w-[77%] mx-auto pb-18 pt-16">
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-4xl text-white font-bold border-l-[5px] border-r-[5px] px-3 border-proj rounded-l-md rounded-r-md">
              قيمنا
            </h3>
            <p className="text-lg text-gray-400 font-normal">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              <div
                className="group bg-[#272727] hover:bg-proj/10 border border-white/20 rounded-2xl p-6
                  flex flex-col items-center text-center
                  transition-all duration-300 hover:border-proj/20"
              >
                <i className="fa-solid fa-users text-4xl text-proj mb-4"></i>

                <h4
                  className="text-[18px] font-bold text-white mb-2
                   transition-all duration-300
                   group-hover:text-proj
                   px-3 py-1 rounded-md"
                >
                  المجتمع
                </h4>

                <p className="text-sm text-gray-400">تعلم مع آلاف المصورين</p>
              </div>

              <div
                className="group bg-[#272727] border hover:bg-proj/10 border-white/20 rounded-2xl p-6
                  flex flex-col items-center text-center
                  transition-all duration-300 hover:border-proj/20"
              >
                <i className="fa-solid fa-comments text-4xl text-proj mb-4"></i>

                <h4
                  className="text-[18px] font-bold text-white mb-2
                   transition-all duration-300
                   group-hover:text-proj
                   px-3 py-1 rounded-md"
                >
                  دائما متحدث
                </h4>

                <p className="text-sm text-gray-400">أحدث الاتجاهات وأفضل الممارسات</p>
              </div>

              <div
                className="group bg-[#272727] border border-white/20 rounded-2xl p-6
                  flex flex-col items-center text-center
                  transition-all duration-300 hover:bg-proj/10 hover:border-proj/20"
              >
                <i className="fa-solid fa-bullseye text-4xl text-proj mb-4"></i>

                <h4
                  className="text-[18px] font-bold text-white mb-2
                   transition-all duration-300
                   group-hover:text-proj 
                   px-3 py-1 rounded-md"
                >
                  التركيز العملي
                </h4>

                <p className="text-sm text-gray-400">أمثلة واقعية يمكنك تطبيقها اليوم</p>
              </div>

              <div
                className="group bg-[#272727] border border-white/20 rounded-2xl p-6
                  flex flex-col items-center text-center
                  transition-all duration-300 hover:bg-proj/10 hover:border-proj/20"
              >
                <i className="fa-solid fa-award text-4xl text-proj mb-4"></i>

                <h4
                  className="text-[18px] font-bold text-white mb-2
                   transition-all duration-300
                   group-hover:text-proj 
                   px-3 py-1 rounded-md"
                >
                  الجودة اولا
                </h4>

                <p className="text-sm text-gray-400">محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
