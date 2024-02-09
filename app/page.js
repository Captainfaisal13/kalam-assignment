import Image from "next/image";
import NavigationBar from "./components/navigationBar";
import SongsDashboard from "./components/songsDashboard";
import UserInfo from "./components/userInfo";
import PlayerFooter from "./components/player";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col sm:flex-row min-h-screen relative items-start">
        <NavigationBar />
        <SongsDashboard />
        <UserInfo />
      </div>
      {/* <PlayerFooter /> */}
    </main>
  );
}
