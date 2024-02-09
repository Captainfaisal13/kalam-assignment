import Image from "next/image";
import React from "react";

const recentSongs = [
  {
    img: "/song4.jpg",
    name: "Todays Hot Hits",
    singer: "The most played tracks right now",
  },
  {
    img: "/song4.jpg",
    name: "Todays Hot Hits",
    singer: "The most played tracks right now",
  },
  {
    img: "/song4.jpg",
    name: "Todays Hot Hits",
    singer: "The most played tracks right now",
  },
  {
    img: "/song4.jpg",
    name: "Todays Hot Hits",
    singer: "The most played tracks right now",
  },
  {
    img: "/song4.jpg",
    name: "Todays Hot Hits",
    singer: "The most played tracks right now",
  },
];
const SongsDashboard = () => {
  return (
    <div className="flex-auto w-full sm:w-4/6 bg-[#18191B] px-4 py-6 sm:px-6 sm:py-6 md:px-8 md:py-8 flex flex-col gap-6">
      <div className="flex gap-2 md:gap-4 lg:gap-6">
        <div className="flex gap-4 my-auto">
          <div className="w-3 h-3 md:w-4 md:h-4 relative cursor-pointer">
            <Image src="left-arrow.svg" fill alt="left arrow" />
          </div>
          <div className="w-3 h-3 md:w-4 md:h-4 relative cursor-pointer">
            <Image src="right-arrow.svg" fill alt="right arrow" />
          </div>
        </div>

        <div className="bg-white flex-auto p-2 md:p-3 rounded-3xl flex gap-2 md:gap-3">
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

        <div className="my-auto cursor-pointer">
          <div className="w-4 h-4 md:w-6 md:h-6 relative rotate-90">
            <Image src="options.svg" fill alt="option" />
          </div>
        </div>
      </div>

      <div className="w-full h-36 md:h-48 lg:h-64 overflow-hidden relative cursor-pointer">
        <Image src="/poster.png" fill alt="poster" className="rounded-md" />
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold">
            Hi, Faisal
          </h3>
          <h5 className="text-xs my-auto text-[#A0A4AB] font-bold cursor-pointer hover:underline underline-[#A0A4AB]">
            See all
          </h5>
        </div>
        <div className="flex gap-4 overflow-x-scroll">
          {recentSongs.map(({ img, name, singer }, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-1 md:gap-2 cursor-pointer"
              >
                <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 overflow-hidden">
                  <Image src={img} fill alt="song" className="rounded-md" />
                </div>
                <div className="text-white">
                  <h4 className="text-xs md:text-sm">{name}</h4>
                  <h6 className="text-xxs md:text-xs text-[#A0A4AB]">
                    {singer}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold">
            Recently Played
          </h3>
          <h5 className="text-xs my-auto text-[#A0A4AB] font-bold cursor-pointer hover:underline underline-[#A0A4AB]">
            See all
          </h5>
        </div>
        <div className="flex gap-4 overflow-x-scroll">
          {recentSongs.map(({ img, name, singer }, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-1 md:gap-2 cursor-pointer"
              >
                <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 overflow-hidden">
                  <Image src={img} fill alt="song" className="rounded-md" />
                </div>
                <div className="text-white">
                  <h4 className="text-xs md:text-sm">{name}</h4>
                  <h6 className="text-xxs md:text-xs text-[#A0A4AB]">
                    {singer}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-xl lg:text-2xl text-white font-bold">
            Recently Played
          </h3>
          <h5 className="text-xs my-auto text-[#A0A4AB] font-bold cursor-pointer hover:underline underline-[#A0A4AB]">
            See all
          </h5>
        </div>
        <div className="flex gap-4 overflow-x-scroll">
          {recentSongs.map(({ img, name, singer }, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-1 md:gap-2 cursor-pointer"
              >
                <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 overflow-hidden">
                  <Image src={img} fill alt="song" className="rounded-md" />
                </div>
                <div className="text-white">
                  <h4 className="text-xs md:text-sm">{name}</h4>
                  <h6 className="text-xxs md:text-xs text-[#A0A4AB]">
                    {singer}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SongsDashboard;
