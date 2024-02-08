import Image from "next/image";
import React from "react";

const UserInfo = () => {
  return (
    <div className="bg-black text-white p-6">
      <div className="flex justify-between mb-12">
        <div className="flex gap-2">
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
          <Image src="/notification.svg" width="20" height="20" alt="logo" />
          <Image src="/down-arrow.svg" width="20" height="20" alt="logo" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="text-md font-bold">Recently Played</h3>
            <h5 className="text-xs my-auto text-[#5c5c6b] font-bold">
              See all
            </h5>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
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
            <div className="flex gap-2">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/discover.svg"
                  alt="discover-icon"
                />
              </div>
              <h4 className="text-[#0361D6]">Discover</h4>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  width="20"
                  height="20"
                  src="/collection.svg"
                  alt="collection-icon"
                />
              </div>
              <h4 className="text-[#0361D6]">Collections</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs text-[#4b4b56] font-bold">LIBRARY</h3>
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
              <h4 className="text-[#0361D6]">Download</h4>
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
              <h4 className="text-[#0361D6]">Favorites</h4>
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
              <h4 className="text-[#0361D6]">Local Files</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
