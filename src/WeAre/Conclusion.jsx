import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Conclusion() {
  return (
    <>
      <section className="bg-proj overflow-hidden border-t border-b border-t-white/20 border-b-white/20px">
        <div className="container w-[77%] mx-auto py-16 text-center items-center flex flex-col gap-8">
          <h4 className="text-white font-bold text-4xl">
            لديك أسئلة ؟ دعنا نتحدث!
          </h4>
          <p className="font-normal text-lg text-white">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء <br /> التحية، لا تتردد في التواصل.
          </p>
          <div className="flex gap-4 items-center">
            <button className="px-8 py-4 rounded-xl bg-black hover:bg-black/90 text-white cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300">
              <i className="far fa-envelope"></i>
              <span className="font-semibold">تواصل معنا</span>
            </button>
            <NavLink to="/blog" className="px-8 py-4 rounded-xl bg-transparent text-white border font-semibold cursor-pointer border-white hover:bg-white hover:border/proj hover:text-black transition-all duration-300">
                تصفح المقالات 
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
