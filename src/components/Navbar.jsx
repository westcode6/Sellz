import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-10  sm:px-28 py-4 bg-[#F5F7F2] flex flex-col sm:flex-row  items-center justify-between">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"} className="w-24 h-10">
          <img src="./assets/sellz-logo.png" className="w-full h-10" alt="" />
        </Link>

        <div className="block lg:hidden">
          <button className="bg-[#f5f7f2] p-1 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full hidden lg:flex items-center justify-end gap-10">
        <div className="flex items-center gap-6">
          <Link
            to={"https://blog.sellz.co/"}
            className="text-neutral-500 hover:bg-stone-200 px-4 py-2 rounded-full"
          >
            <h4 className="text-sm font-semibold">Our Blog</h4>
          </Link>

          <Link
            to={"https://sellz.co/login"}
            className="text-neutral-500 bg-neutral-200 hover:bg-neutral-700 hover:text-neutral-200 px-6 py-4 rounded-full"
          >
            <h4 className="text-lg  font-semibold">Login</h4>
          </Link>
          <button className="px-6 py-4 text-lg font-bold bg-[#ffc83e]  text-neutral-600 uppercase tracking-wide rounded-full">
            <a href="https://sellz.co/signup">Start Selling</a>
          </button>
        </div>
      </div>
    </nav>
  );
}



