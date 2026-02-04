import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-6">
      <i className="fa-solid fa-circle-xmark text-[90px] text-proj"></i>

      <h1 className="text-[120px] font-extrabold tracking-widest">404</h1>

      <p className="text-xl font-semibold text-gray-400">
        والله يخويا دي مش موجوده بس ممكن تجرب دول 
      </p>

      <div className="flex gap-6 items-center mt-5">
        <Link
          to="/"
          className="mt-4 px-8 py-3 rounded-xl bg-proj text-white text-xl font-bold hover:scale-105 transition-all"
        >
          Go Home
        </Link>
        <Link
          to="/blog"
          className="mt-4 px-8 py-3 rounded-xl bg-proj text-white text-xl font-bold hover:scale-105 transition-all"
        >
          Blog
        </Link>
        <Link
          to="/weare"
          className="mt-4 px-8 py-3 rounded-xl bg-proj text-white text-xl font-bold hover:scale-105 transition-all"
        >
          Who We Are
        </Link>
      </div>
    </div>
  );
}
