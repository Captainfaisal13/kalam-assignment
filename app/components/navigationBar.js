"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
const NavigationBar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div
      className={`w-full sm:max-w-56 sm:min-w-56 bg-black text-white px-4 py-2 sm:px-6 sm:py-6 sticky top-0 sm:h-screen ${
        !isOpenNav ? "h-16" : "h-screen"
      } z-10`}
    >
      <div className="flex justify-between mb-12">
        <div className="w-12 h-12 relative cursor-pointer">
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <div
          className="w-6 h-6 relative my-auto cursor-pointer"
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          <Image src="/hide.png" fill alt="logo" />
        </div>
      </div>

      <div
        className={`pl-2 sm:flex flex-col gap-8 ${
          isOpenNav ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-xxs text-[#4b4b56] font-bold">FEATURES</h3>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 cursor-pointer">
              <div className="">
                <Image
                  width="20"
                  height="20"
                  src="/home.svg"
                  alt="home-icon"
                  className=""
                />
              </div>
              <h4 className="text-[#0361D6]">Home</h4>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/discover.svg"
                  alt="discover-icon"
                />
              </div>
              <h4 className="text-[#A0A4AB]">Discover</h4>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/collection.svg"
                  alt="collection-icon"
                />
              </div>
              <h4 className="text-[#A0A4AB]">Collections</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="text-xxs text-[#4b4b56] font-bold">LIBRARY</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/download.svg"
                  alt="downlaod-icon"
                />
              </div>
              <h4 className="text-[#A0A4AB] cursor-pointer">Download</h4>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/heart.svg"
                  alt="heart-icon"
                />
              </div>
              <h4 className="text-[#A0A4AB] cursor-pointer">Favorites</h4>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/files.svg"
                  alt="files-icon"
                />
              </div>
              <h4 className="text-[#A0A4AB] cursor-pointer">Local Files</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
