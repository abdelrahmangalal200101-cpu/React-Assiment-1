import { useState } from "react";
import logo from "./assets/Images/logo-GdqARQRt.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 bg-[#161616] border-b z-30">
      <div className="px-4 sm:px-8 lg:px-36 py-3.5 bg-transparent justify-between items-center flex">
        <div className="flex items-center gap-2 sm:gap-3">
          <div>
            <img 
              src={logo} 
              className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 hover:scale-105 transition-all duration-300" 
              alt="عدسه logo" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg sm:text-xl font-bold">عدسه</span>
            <span className="text-orange-600 font-normal text-[10px] sm:text-xs">
              عالم التصوير الفوتغرافي
            </span>
          </div>
        </div>

        <div className="hidden lg:flex rounded-full border border-[#262626] bg-transparent p-1.5 gap-0.5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-proj text-white rounded-full px-5 py-2.5 text-sm font-normal"
                : "text-gray-400 bg-transparent text-sm px-5 py-2.5 hover:text-white transition-all duration-300"
            }
            to="/"
          >
            الرئيسية
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-proj text-white rounded-full px-5 py-2.5 text-sm font-normal"
                : "text-gray-400 bg-transparent text-sm px-5 py-2.5 hover:text-white transition-all duration-300"
            }
            to="/blog"
          >
            المدونة
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-proj text-white rounded-full px-5 py-2.5 text-sm font-normal"
                : "text-gray-400 bg-transparent text-sm px-5 py-2.5 hover:text-white transition-all duration-300"
            }
            to="/weare"
          >
            من نحن
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-2.5">
          <div className="py-3 px-2.5 rounded-xl flex justify-center items-center bg-transparent text-gray-600 border border-transparent hover:text-orange-400 hover:border-orange-400/30 transition duration-300 cursor-pointer">
            <i className="fa fa-search"></i>
          </div>
          <NavLink 
            to="/blog" 
            className="px-8 rounded-full py-4 bg-proj transition-all hover:-translate-y-0.5 text-white flex items-center justify-center text-base font-semibold"
          >
            إبدأ القراءة
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:text-orange-400 transition-colors"
          aria-label="Toggle menu"
        >
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-2 opacity-0"
        }`}
      >
        <div className="px-4 py-4 bg-[#1a1a1a] border-t border-[#262626] space-y-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block bg-proj text-white rounded-lg px-4 py-3 text-sm font-normal text-center"
                : "block text-gray-400 bg-transparent text-sm px-4 py-3 hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-300 text-center"
            }
            to="/"
            onClick={() => setIsOpen(false)}
          >
            الرئيسية
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block bg-proj text-white rounded-lg px-4 py-3 text-sm font-normal text-center"
                : "block text-gray-400 bg-transparent text-sm px-4 py-3 hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-300 text-center"
            }
            to="/blog"
            onClick={() => setIsOpen(false)}
          >
            المدونة
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "block bg-proj text-white rounded-lg px-4 py-3 text-sm font-normal text-center"
                : "block text-gray-400 bg-transparent text-sm px-4 py-3 hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-300 text-center"
            }
            to="/weare"
            onClick={() => setIsOpen(false)}
          >
            من نحن
          </NavLink>
          
          <div className="pt-3 flex flex-col gap-2">
            <button className="w-full py-3 px-4 rounded-lg flex justify-center items-center bg-transparent text-gray-600 border border-[#262626] hover:text-orange-400 hover:border-orange-400/30 transition duration-300">
              <i className="fa fa-search ml-2"></i>
              <span className="text-sm">بحث</span>
            </button>
            <NavLink 
              to="/blog" 
              className="w-full px-4 rounded-lg py-3 bg-proj text-white flex items-center justify-center text-sm font-semibold hover:bg-orange-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              إبدأ القراءة
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}