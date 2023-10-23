'use client'
import {
	faCompass,
	faHeadphones,
	faMusic,
	faSearch,
	faStar,
    faBell,
	faUser,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation"


const SideMenu = () => {
	const activeSegment = useSelectedLayoutSegment()

	const links = [
		{label: "Home", path: "/", targetSegment: null, icon: faBell},
		{label: "Discover", path: "/discover", targetSegment: "", icon: faCompass},
		{label: "Genre", path: "/genre", targetSegment: "genre", icon: faMusic},
		{label: "Top Chart", path: "/chart", targetSegment: "", icon: faHeadphones},
	]
	return (
        <div className="flex flex-col fixed top-0 left-0 w-[16%] h-full ml-10 mt-10">
            <div className="flex cursor-pointer pb-6 items-center space-x-4">
                <FontAwesomeIcon icon={faUser} className=" text-2xl" />
                <span>Nariman Kultayev</span>
            </div>
			<div className="flex flex-col">
				<h3 className="mb-6 font-bold">BROWSE</h3>
				<ul className="flex flex-col space-y-3 font-semibold">
					{links.map((link, index) => {
						return (
							<li key={index} className="hover:scale-x-90 transition-transform">
								<Link
							
									href={link.path}
									className="flex flex-row items-center space-x-2"
									style={{color: (activeSegment === link.targetSegment) ? 'white' : 'none'}}
								>
									<FontAwesomeIcon icon={link.icon} className="w-5" />
									<span>{link.label}</span>
								</Link>
							</li>
						)
					})}
					{/* <li className="hover:scale-x-90 transition-transform">
						<Link
							href="/discover"
							className="flex flex-row items-center space-x-2"
						>
							<FontAwesomeIcon icon={faSearch} className="w-5" />
							<span>DISCOVER</span>
						</Link>
					</li>
					<li className="hover:scale-x-90 transition-transform">
						<Link
							href="/genres"
							className="flex flex-row items-center space-x-2"
						>
							<FontAwesomeIcon icon={faMusic} className="w-5" />
							<span>GENRE</span>
						</Link>
					</li>
					<li className="hover:scale-x-90 transition-transform">
						<Link
							href="/chart"
							className="flex flex-row items-center space-x-2"
						>
							<FontAwesomeIcon
								icon={faHeadphones}
								className="w-5"
							/>
							<span>TOP CHARTS</span>
						</Link>
					</li> */}
				</ul>
			</div>

			<div className="flex flex-col flex-1">
				<h3 className="mt-16 mb-6 font-bold">LIBRARY</h3>
				<ul className="flex flex-col space-y-3 font-semibold">
					<li className="hover:scale-x-90 transition-transform">
						<Link
							href="/favourites"
							className="flex flex-row items-center space-x-2"
						>
							<FontAwesomeIcon icon={faStar} className="w-5" />
							<span>FAVOURITES</span>
						</Link>
					</li>
					<li className="hover:scale-x-90 transition-transform">
						<Link
							href="/playlist"
							className="flex flex-row items-center space-x-2"
						>
							<FontAwesomeIcon icon={faCompass} className="w-5" />
							<span className="">PLAYLIST</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;
