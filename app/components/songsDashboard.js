import Image from "next/image";
import React from "react";

const SongsDashboard = () => {
  return (
    <div className="col-span-4 bg-[#18191B] py-8 px-8 flex flex-col gap-8">
      <div className="flex gap-6">
        <div className="flex gap-4 my-auto">
          <div className="w-4 h-4 relative">
            <Image src="left-arrow.svg" fill />
          </div>
          <div className="w-4 h-4 relative">
            <Image src="right-arrow.svg" fill />
          </div>
        </div>

        <div className="bg-white flex-auto p-3 rounded-3xl flex gap-3">
          <div className="w-5 h-5 relative my-auto">
            <Image src="search.svg" fill />
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
            <Image src="options.svg" fill />
          </div>
        </div>
      </div>

      <div className="w-full h-64 overflow-hidden relative">
        <Image src="/poster.png" fill alt="poster" className="rounded-md" />
      </div>
    </div>
  );
};

export default SongsDashboard;
