import './globals.css';
import SideMenu from "./components/SideMenu";
import MainScreen from "./components/MainScreen"
import Player from "./components/Player"

export default function Home() {
  return (
    <main className="flex">
      <SideMenu />
      <MainScreen />
      <Player />

    </main>
  )
}
