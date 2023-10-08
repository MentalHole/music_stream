import { faCompass, faHeadphones, faMicrophone, faMusic, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SideMenu = () => {

    return (
        <div className="flex flex-col fixed top-0 left-0 w-[16%] h-full ml-10 mt-10">
            <div className="flex flex-col">
                <h3 className="mb-6 font-bold">BROWSE</h3>
                <ul className="flex flex-col space-y-3 font-semibold">
                    <li className="hover:scale-90  transition-transform">
                        <Link href="/discover" className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="w-6"
                            />
                            <span>DISCOVER</span>
                        </Link>
                    </li>
                    <li className="hover:scale-90  transition-transform">
                        <Link href="/genres" className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faMusic}
                                className="w-6"
                            />
                            <span>GENRE</span>
                        </Link>
                    </li>
                    <li className="hover:scale-90  transition-transform">
                        <Link href="/chart" className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faHeadphones}
                                className="w-6"
                            />
                            <span>TOP CHARTS</span>
                        </Link>
                    </li>
                    <li className="hover:scale-90  transition-transform">
                        <Link href="/podcasts" className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faMicrophone}
                                className="w-6"
                            />
                            <span>PODCASTS</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="mt-16 mb-6 font-bold">LIBRARY</h3>
                <ul className="flex flex-col space-y-3 font-semibold">
                    <li className="hover:scale-90  transition-transform">
                        <Link href="/favourites" className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faStar}
                                className="w-6"
                            />
                            <span>FAVOURITES</span>
                        </Link>
                    </li>
                    <li className="hover:scale-90  transition-transform">
                        <Link href="/playlist" className="flex flex-row items-center space-x-2">
                            <FontAwesomeIcon
                                icon={faCompass}
                                className="w-6"
                            />
                            <span className="">PLAYLIST</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu