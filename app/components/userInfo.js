import Image from "next/image";
import React from "react";

const recentSongs = [
  {
    img: "/song1.jpg",
    name: "Confessions",
    singer: "Usher",
    time: "4 min ago",
  },
  {
    img: "/song2.jpg",
    name: "Chobar",
    singer: "Arjan Dhillon, Mxrci",
    time: "7 min ago",
  },
  {
    img: "/song3.jpg",
    name: "Licence - EP",
    singer: "Vicky Dhaliwal",
    time: "1 hr ago",
  },
  {
    img: "/song1.jpg",
    name: "Philips",
    singer: "Heasham Abdul",
    time: "2 hr ago",
  },
];

const UserInfo = () => {
  return (
    <div className="min-w-72 bg-black text-white p-6 col-span-1 sticky top-0 h-screen hidden xl:block">
      <div className="flex justify-between mb-6">
        <div className="flex gap-2 cursor-pointer">
          <div className="w-10 h-10 relative overflow-hidden">
            <Image
              src="/profile-pic.jpg"
              fill
              alt="logo"
              className="rounded-full"
            />
          </div>
          <h4 className="text-sm my-auto">Timothy Luca</h4>
        </div>

        <div className="my-auto flex gap-2">
          <Image
            src="/notification.svg"
            width="20"
            height="20"
            alt="logo"
            className="cursor-pointer"
          />
          <Image
            src="/down-arrow.svg"
            width="20"
            height="20"
            alt="logo"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 mb-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="text-md font-bold">Recently Played</h3>
            <h5 className="text-xs my-auto text-[#A0A4AB] font-bold hover:underline underline-[#A0A4AB] cursor-pointer">
              See all
            </h5>
          </div>

          <div className="flex flex-col gap-2">
            {recentSongs.map((song, idx) => {
              return (
                <div key={idx} className="flex justify-between cursor-pointer">
                  <div className="flex gap-2">
                    <div className="relative w-10 h-10">
                      <Image fill src={song.img} alt={song.img} className="" />
                    </div>
                    <div className="flex flex-col gap-1 my-auto">
                      <h4 className="text-white text-xs font-bold">
                        {song.name}
                      </h4>
                      <h6 className="text-xxs text-[#A0A4AB]">{song.singer}</h6>
                    </div>
                  </div>
                  <div className="my-auto">
                    <h6 className="text-xxs text-[#A0A4AB]">{song.time}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="text-md font-bold">Recently Played</h3>
            <h5 className="text-xs my-auto text-[#A0A4AB] font-bold hover:underline underline-[#A0A4AB] cursor-pointer">
              See all
            </h5>
          </div>

          <div className="flex flex-col gap-2">
            {recentSongs.map((song, idx) => {
              return (
                <div key={idx} className="flex justify-between cursor-pointer">
                  <div className="flex gap-2">
                    <div className="relative w-10 h-10">
                      <Image fill src={song.img} alt={song.img} className="" />
                    </div>
                    <div className="flex flex-col gap-1 my-auto">
                      <h4 className="text-white text-xs font-bold">
                        {song.name}
                      </h4>
                      <h6 className="text-xxs text-[#A0A4AB]">{song.singer}</h6>
                    </div>
                  </div>
                  <div className="my-auto">
                    <h6 className="text-xxs text-[#A0A4AB]">{song.time}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button className="py-2 px-8 text-sm bg-[#BEC0C5] w-full rounded-md text-black font-bold">
        Create New Playlist
      </button>
    </div>
  );
};

export default UserInfo;
