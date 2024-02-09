import Image from "next/image";
import React from "react";

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
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song1.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">Confessions</h4>
                  <h6 className="text-xxs text-white font-thin">Usher</h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">4 min ago</h6>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song2.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">Chobar</h4>
                  <h6 className="text-xxs text-white font-thin">
                    Arjan Dhillon, Mxrci
                  </h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">7 min ago</h6>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song3.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">Licence - EP</h4>
                  <h6 className="text-xxs text-white font-thin">
                    Vicky Dhaliwal
                  </h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">1 hr ago</h6>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song4.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">
                    Philip&apos;s
                  </h4>
                  <h6 className="text-xxs text-white font-thin">
                    Heasham Abdul
                  </h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">2 hr ago</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="text-md font-bold">My Playlist</h3>
            <h5 className="text-xs my-auto text-[#5c5c6b] font-bold">
              See all
            </h5>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song1.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">Confessions</h4>
                  <h6 className="text-xxs text-white font-thin">Usher</h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">2hr 43 min ago</h6>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song2.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">Chobar</h4>
                  <h6 className="text-xxs text-white font-thin">
                    Arjan Dhillon, Mxrci
                  </h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">7 min ago</h6>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song3.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">Licence - EP</h4>
                  <h6 className="text-xxs text-white font-thin">
                    Vicky Dhaliwal
                  </h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">1 hr ago</h6>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image fill src="/song4.jpg" alt="home-icon" className="" />
                </div>
                <div className="flex flex-col gap-1 my-auto">
                  <h4 className="text-white text-xs font-bold">
                    Philip&apos;s
                  </h4>
                  <h6 className="text-xxs text-white font-thin">
                    Heasham Abdul
                  </h6>
                </div>
              </div>
              <div className="my-auto">
                <h6 className="text-xxs text-[#A0A4AB]">4 min ago</h6>
              </div>
            </div>
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
