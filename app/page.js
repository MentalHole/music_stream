import './globals.css';
import SideMenu from "./components/SideMenu";
import MainScreen from "./components/MainScreen"

export default function Home() {
  return (
    <main className="flex">
      <SideMenu />
      <MainScreen />
    </main>
  )
}
