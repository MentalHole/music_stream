import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faMicrophone,
	faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import PlayButton from "./PlayButton";
import HeartButton from "./HeartButton";
import SongGrid from "./SongGrid";
import Image from "next/image";
import {
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	bg,
} from "../app/assets/index";
import Link from "next/link";

const Main = () => {
	const songsList = [
		{
			name: "Watch the world burn",
			artist: "ZXCxCursed",
			image: image2,
		},
		{
			name: "Take a Chance (feat. Little Dragon)",
			artist: "Else",
			image: image1,
		},
		{
			name: "Control",
			artist: "Zaz",
			image: image3,
		},
		{
			name: "Humayusi",
			artist: "Imagine Dragons",
			image: image4,
		},
		{
			name: "I'm blue da budy da buday",
			artist: "Grandson",
			image: image5,
		},
		{
			name: "Control",
			artist: "Benedict Cucumber",
			image: image6,
		},
	];

	return (
		<div className="text-white p-10 flex-1 ml-[16%]">
			<div className="flex -z-100 justify-between mb-8">
				<div
					className="absolute lg:ml-[16%] -z-10 rounded-lg inset-0 bg-contain bg-no-repeat lg:block hidden"
					style={{ backgroundImage: `url(${bg.src})` }}
				></div>
				<div className="flex items-center">
					<div className="relative flex items-center mr-2">
						<FontAwesomeIcon
							icon={faSearch}
							className="w-4 text-white text-xl absolute left-3"
						/>
						<input
							type="text"
							placeholder="Search"
							className="pl-10 py-2 pr-8 rounded-md w-80 focus:outline-none"
						/>
						<FontAwesomeIcon
							icon={faMicrophone}
							className="w-4 absolute right-3"
						/>
					</div>
				</div>
			</div>
			<div className="flex items-start justify-between">
				<div className="flex-1">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-8 mb-6">
						What's hot this <br /> weekend?
					</h1>
					<p className="text-md font-medium text-gray-400 mb-6">
						Growing up in the small, wintry town of Berkak, Norway
						with less than
						<br /> 1000 pople, Astrid S was drawn to music at a
						veryearly age...
					</p>
					<div className="w-40">
						<Link
							href={"/"}
							className="flex flex-row items-center "
						>
							<FontAwesomeIcon
								icon={faPlayCircle}
								className="w-6"
							/>
							<span className="text-lg font-semibold">
								Listen
							</span>
						</Link>
					</div>

					<div>
						<h1 className="text-2xl font-semibold mt-20 mb-2">
							Top Album
						</h1>
					</div>

					<div className="grid md:grid-cols-6 sm:grid-cols-4 gap-x-1">
						{songsList.map((song, index) => (
							<a
								key={index}
								aria-current="page"
								className="bg-footer p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl hover:text-black group active"
								href="/"
							>
								<div className="pt-[100%] relative mb-4">
									<Image
										alt="cover"
										src={song.image}
										className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
									/>
									<HeartButton />
									<PlayButton />
								</div>
								<h6 className="overflow-hidden overflow-ellipsis  whitespace-nowrap  text-base font-semibold">
									{song.name}
								</h6>
								<p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">
									{song.artist}
								</p>
							</a>
						))}
					</div>

					<div>
						<SongGrid />
					</div>
					<div className="flex justify-between">
						<h1 className="text-2xl font-semibold mt-2 mb-2">
							Recently played
						</h1>
						<a href="#" className="hover:text-gray-400">
							Show All
						</a>
					</div>

					<div className="grid md:grid-cols-6 sm:grid-cols-6 grid-cols-2  gap-x-1">
						{songsList.map((song, index) => (
							<a
								key={index}
								aria-current="page"
								className="bg-footer p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl hover:text-black group active"
								href="/"
							>
								<div className="pt-[100%] relative mb-4">
									<Image
										alt="cover"
										src={song.image}
										className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
									/>
									<HeartButton />
									<PlayButton />
								</div>
								<h6 className="overflow-hidden overflow-ellipsis  whitespace-nowrap  text-base font-semibold">
									{song.name}
								</h6>
								<p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">
									{song.artist}
								</p>
							</a>
						))}
					</div>
					<div className="flex justify-between">
						<h1 className="text-2xl font-semibold mt-2 mb-2">
							Popular Podcasts
						</h1>
						<a href="#" className="hover:text-gray-400">
							Show All
						</a>
					</div>

					<div className="grid md:grid-cols-6 sm:grid-cols-6 grid-cols-2 gap-x-1 pb-6">
						{songsList
							.slice(0)
							.reverse()
							.map((song, index) => (
								<a
									key={index}
									aria-current="page"
									className="bg-footer p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl hover:text-black group active"
									href="/"
								>
									<div className="pt-[100%] relative mb-4">
										<Image
											alt="cover"
											src={song.image}
											className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
										/>
										<HeartButton />
										<PlayButton />
									</div>
									<h6 className="overflow-hidden overflow-ellipsis  whitespace-nowrap  text-base font-semibold">
										{song.name}
									</h6>
									<p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">
										{song.artist}
									</p>
								</a>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
