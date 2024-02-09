"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
const NavigationBar = ({ option, setOption }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div
      className={`w-full sm:max-w-56 sm:min-w-56 bg-black text-white sticky top-0 sm:h-screen ${
        !isOpenNav ? "h-16" : "h-screen"
      } z-10`}
    >
      <div className="px-4 py-2 sm:px-6 sm:py-6">
        <div className="flex justify-between mb-12">
          <div className="w-12 h-12 relative cursor-pointer">
            <Image src="/logo.png" fill alt="logo" />
          </div>
          <div
            className="w-6 h-6 relative my-auto cursor-pointer"
            onClick={() => setIsOpenNav(!isOpenNav)}
          >
            <Image
              src={isOpenNav ? "/close.svg" : "/hide.png"}
              fill
              alt="logo"
            />
          </div>
        </div>

        <div
          className={`pl-2 sm:flex flex-col gap-8 ${
            isOpenNav ? "flex" : "hidden"
          }`}
        >
          <div className="bg-white flex-auto p-2 md:p-3 rounded-3xl flex sm:hidden gap-2 md:gap-3">
            <div className="w-3 h-3 md:w-5 md:h-5 relative my-auto">
              <Image src="search.svg" fill alt="search" />
            </div>
            <div className="flex-auto">
              <input
                className="text-sm text-[#A0A4AB] w-full outline-none"
                placeholder="search for artists, songs, or albums"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xxs text-[#4b4b56] font-bold">FEATURES</h3>

            <div className="flex flex-col gap-3">
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setOption(0)}
              >
                <div className="">
                  <Image
                    width="20"
                    height="20"
                    src={option === 0 ? "/home-active.svg" : "/home.svg"}
                    alt="home-icon"
                    className=""
                  />
                </div>
                <h4
                  className={`${
                    option === 0 ? "text-[#0361D6]" : "text-[#A0A4AB]"
                  }`}
                >
                  Home
                </h4>
              </div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setOption(1)}
              >
                <div>
                  <Image
                    width="20"
                    height="20"
                    src={
                      option === 1 ? "/discover-active.svg" : "/discover.svg"
                    }
                    alt="discover-icon"
                  />
                </div>
                <h4
                  className={`${
                    option === 1 ? "text-[#0361D6]" : "text-[#A0A4AB]"
                  }`}
                >
                  Discover
                </h4>
              </div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setOption(2)}
              >
                <div>
                  <Image
                    width="20"
                    height="20"
                    src={
                      option === 2
                        ? "/collection-active.svg"
                        : "/collection.svg"
                    }
                    alt="collection-icon"
                  />
                </div>
                <h4
                  className={`${
                    option === 2 ? "text-[#0361D6]" : "text-[#A0A4AB]"
                  }`}
                >
                  Collections
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xxs text-[#4b4b56] font-bold">LIBRARY</h3>
            <div className="flex flex-col gap-3">
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setOption(3)}
              >
                <div>
                  <Image
                    width="20"
                    height="20"
                    src={
                      option === 3 ? "/download-active.svg" : "/download.svg"
                    }
                    alt="downlaod-icon"
                  />
                </div>
                <h4
                  className={`${
                    option === 3 ? "text-[#0361D6]" : "text-[#A0A4AB]"
                  }`}
                >
                  Download
                </h4>
              </div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setOption(4)}
              >
                <div>
                  <Image
                    width="20"
                    height="20"
                    src={option === 4 ? "/heart-active.svg" : "/heart.svg"}
                    alt="heart-icon"
                  />
                </div>
                <h4
                  className={`${
                    option === 4 ? "text-[#0361D6]" : "text-[#A0A4AB]"
                  }`}
                >
                  Favorites
                </h4>
              </div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setOption(5)}
              >
                <div>
                  <Image
                    width="20"
                    height="20"
                    src={option === 5 ? "/files-active.svg" : "/files.svg"}
                    alt="files-icon"
                  />
                </div>
                <h4
                  className={`${
                    option === 5 ? "text-[#0361D6]" : "text-[#A0A4AB]"
                  }`}
                >
                  Local Files
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-full h-44 relative">
        <Image src="/song3.jpg" fill />
      </div>
    </div>
  );
};

export default NavigationBar;
