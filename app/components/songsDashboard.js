import Image from "next/image";
import React from "react";

const SongsDashboard = () => {
  return (
    <div className="col-span-4 bg-[#18191B] py-8 px-8 flex flex-col gap-6">
      <div className="flex gap-6">
        <div className="flex gap-4 my-auto">
          <div className="w-4 h-4 relative">
            <Image src="left-arrow.svg" fill alt="left arrow" />
          </div>
          <div className="w-4 h-4 relative">
            <Image src="right-arrow.svg" fill alt="right arrow" />
          </div>
        </div>

        <div className="bg-white flex-auto p-3 rounded-3xl flex gap-3">
          <div className="w-5 h-5 relative my-auto">
            <Image src="search.svg" fill alt="search" />
          </div>
          <div className="flex-auto">
            <input
              className="text-sm text-[#A0A4AB] w-full outline-none"
              placeholder="search for artists, songs, or albums"
            />
          </div>
        </div>

        <div className="my-auto">
          <div className="w-8 h-8 relative rotate-90">
            <Image src="options.svg" fill alt="option" />
          </div>
        </div>
      </div>

      <div className="w-full h-64 overflow-hidden relative">
        <Image src="/poster.png" fill alt="poster" className="rounded-md" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-2xl text-white font-bold">Recently Played</h3>
          <h5 className="text-xs my-auto text-[#A0A4AB] font-bold">See all</h5>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <div className="relative w-56 h-56 overflow-hidden">
              <Image src="/song4.jpg" fill alt="song" className="rounded-md" />
            </div>
            <div className="text-white">
              <h4 className="text-sm">Today&apos;s Hot Hits</h4>
              <h6 className="text-xs text-[#A0A4AB]">
                The most played tracks right now
              </h6>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-56 h-56 overflow-hidden">
              <Image src="/song4.jpg" fill alt="song" className="rounded-md" />
            </div>
            <div className="text-white">
              <h4 className="text-sm">Today&apos;s Hot Hits</h4>
              <h6 className="text-xs text-[#A0A4AB]">
                The most played tracks right now
              </h6>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-56 h-56 overflow-hidden">
              <Image src="/song4.jpg" fill alt="song" className="rounded-md" />
            </div>
            <div className="text-white">
              <h4 className="text-sm">Today&apos;s Hot Hits</h4>
              <h6 className="text-xs text-[#A0A4AB]">
                The most played tracks right now
              </h6>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-56 h-56 overflow-hidden">
              <Image src="/song4.jpg" fill alt="song" className="rounded-md" />
            </div>
            <div className="text-white">
              <h4 className="text-sm">Today&apos;s Hot Hits</h4>
              <h6 className="text-xs text-[#A0A4AB]">
                The most played tracks right now
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongsDashboard;
