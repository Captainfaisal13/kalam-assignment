import Image from "next/image";
import React from "react";

const PlayerFooter = () => {
  return (
    <div className="p-2 sm:p-4 md:p-6 flex">
      <div className="w-44 justify-between hidden sm:flex">
        <div className="my-auto">
          <h3 className="text-sm font-bold">Licence - EP</h3>
          <h4 className="text-xs text-[#A0A4AB]">Vicky Dhaliwal</h4>
        </div>
        <div className="flex gap-2">
          <div className="my-auto cursor-pointer">
            <Image
              width="20"
              height="20"
              src="/favorite.svg"
              alt="heart-icon"
            />
          </div>
          <div className="my-auto cursor-pointer">
            <Image width="20" height="20" src="/add.svg" alt="heart-icon" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto">
        <div className="flex gap-4 justify-center">
          <div className="my-auto cursor-pointer">
            <Image width="20" height="20" src="/shuffle.svg" alt="heart-icon" />
          </div>
          <div className="my-auto cursor-pointer">
            <Image
              width="20"
              height="20"
              src="/backward.svg"
              alt="heart-icon"
            />
          </div>
          <div className="my-auto cursor-pointer">
            <Image width="30" height="30" src="/pause.svg" alt="heart-icon" />
          </div>
          <div className="my-auto cursor-pointer">
            <Image width="20" height="20" src="/forward.svg" alt="heart-icon" />
          </div>
          <div className="my-auto cursor-pointer">
            <Image width="20" height="20" src="/repeat.svg" alt="heart-icon" />
          </div>
        </div>
        <div className="w-11/12 sm:10/12 md:w-1/2 mx-auto">
          <input type="range" className="w-full h-1" />
        </div>
      </div>
      <div className="gap-4 justify-center min-w-56 hidden md:flex">
        <div className="my-auto cursor-pointer">
          <Image width="20" height="20" src="/sound.svg" alt="heart-icon" />
        </div>
        <div className="my-auto pb-2">
          <input type="range" className="h-1" />
        </div>
        <div className="my-auto cursor-pointer">
          <Image
            width="20"
            height="20"
            src="/microphone.svg"
            alt="heart-icon"
          />
        </div>
        <div className="my-auto cursor-pointer">
          <Image width="20" height="20" src="/device.svg" alt="heart-icon" />
        </div>
        <div className="my-auto cursor-pointer">
          <Image width="20" height="20" src="/repeat.svg" alt="heart-icon" />
        </div>
      </div>
    </div>
  );
};

export default PlayerFooter;
