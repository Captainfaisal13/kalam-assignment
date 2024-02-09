"use client";
import Image from "next/image";
import NavigationBar from "./components/navigationBar";
import SongsDashboard from "./components/songsDashboard";
import UserInfo from "./components/userInfo";
import PlayerFooter from "./components/player";
import { useState } from "react";

export default function Home() {
  const [option, setOption] = useState(0);
  return (
    <main className="relative">
      <div className="flex flex-col sm:flex-row min-h-screen relative items-start">
        <NavigationBar option={option} setOption={setOption} />
        <SongsDashboard />
        <UserInfo />
      </div>
      <div className="fixed bottom-0 left-0 z-20 bg-black text-white w-full border-[#18191B] border-t-2">
        <PlayerFooter />
      </div>
    </main>
  );
}
