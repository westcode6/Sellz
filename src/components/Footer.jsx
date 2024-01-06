import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram, FaInstagram,  } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-10 flex items-center justify-center">
      <div className="w-full sm:max-w-[320px] flex flex-col items-center gap-6">
        <Link to={"/"} className="">
          <img src="./assets/sellz-logo.png" className="w-20 h-6" alt="" />
        </Link>

        <div className="w-full flex items-center justify-center text-2xl space-x-4">
          <span>
            {" "}
            <FaTelegram />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FiTwitter />
          </span>
        </div>

        <p className="text-neutral-600 py-4 font-medium">@2023 SELLZ, All rights reserved</p>
      </div>
    </footer>
  );
}
