import Image from "next/image";
import NavigationBar from "./components/navigationBar";
import SongsDashboard from "./components/songsDashboard";
import UserInfo from "./components/userInfo";
import PlayerFooter from "./components/player";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-6 min-h-screen">
        <NavigationBar />
        <SongsDashboard />
        <UserInfo />
      </div>
      {/* <PlayerFooter /> */}
    </main>
  );
}
