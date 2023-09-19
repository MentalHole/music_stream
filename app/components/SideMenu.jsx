import { faCompass, faHeadphones, faMicrophone, faMusic, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideMenu = () => {

    return (
        <div className="flex flex-col fixed top-0 left-0 w-[16%] h-full ml-10 mt-10">
            <div className="flex flex-col">
                <h3 className="mb-6 font-bold">BROWSE</h3>
                <ul className="flex flex-col space-y-3 font-semibold">
                    <li className="flex flex-row items-center space-x-2">
                        <FontAwesomeIcon 
                            icon={faSearch}
                            className="w-6"
                        />
                        <span>DISCOVER</span>
                    </li>
                    <li className="flex flex-row items-center space-x-2">
                        <FontAwesomeIcon 
                            icon={faMusic}
                            className="w-6"
                        />
                        <span>GENRE</span>
                    </li>
                    <li className="flex flex-row items-center space-x-2">
                        <FontAwesomeIcon 
                            icon={faHeadphones}
                            className="w-6"
                        />
                        <span>TOP CHARTS</span>
                    </li>
                    <li className="flex flex-row items-center space-x-2">
                        <FontAwesomeIcon 
                            icon={faMicrophone}
                            className="w-6"
                        />
                        <span>PODCASTS</span>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="mt-16 mb-6 font-bold">LIBRARY</h3>
                <ul className="flex flex-col space-y-3 font-semibold">
                    <li className="flex items-center space-x-2">
                        <FontAwesomeIcon 
                            icon={faStar}
                            className="w-6"
                        />
                        <span>FAVOURITES</span>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FontAwesomeIcon
                            icon={faCompass}
                            className="w-6"
                        />
                        <span className="">PLAYLIST</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu