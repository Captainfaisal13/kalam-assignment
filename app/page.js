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
    <main>
      <div className="flex flex-col sm:flex-row min-h-screen relative items-start">
        <NavigationBar option={option} setOption={setOption} />
        <SongsDashboard />
        <UserInfo />
      </div>
      {/* <PlayerFooter /> */}
    </main>
  );
}
