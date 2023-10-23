"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faPlay,
	faPause,
	faPlus,
	faChartSimple,
	faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const Chart = () => {
	// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
	const token =
		process.env.TOKEN;
	async function fetchWebApi(endpoint, method, body) {
		const res = await fetch(`https://api.spotify.com/${endpoint}`, {
			headers: {
				Authorization: `Basic ${token}`,
			},
			method,
			body: JSON.stringify(body),
		});
		return await res.json();
	}

	async function getTopTracks() {
		// Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
		return (
			await fetchWebApi(
				"v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'",
				"GET"
			)
		).items;
	}
    const getTracks = async() => {
        const tracker = await getTopTracks()
        setTracks(tracker)
    }
    const [topTracks, setTracks] = useState([])
    useEffect(() => {
        getTracks()
    }, [getTracks]);

	return (
		<div className="grid md:grid-cols-2 grid-cols-1 gap-4 ml-[16%] mt-10">
			<div className="flex flex-col justify-between p-4 rounded ">
				<div className="flex items-center justify-between mb-2">
					<h2 className="font-bold">Top Tracks</h2>
					<span className="text-customBlue-1">
						<FontAwesomeIcon icon={faArrowRight} />
					</span>
				</div>
				{topTracks?.map(({ name, album, artists }, index) => (
					<div
						key={index}
						className="p-4 rounded hover:bg-customBlue mb-2 flex items-center justify-between"
					>
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faChartSimple}
								className="mr-4 w-4 text-customBlue-1"
							/>
							<FontAwesomeIcon
								icon={faPlay}
								className="mr-4 w-4"
							/>
							<Image
								src={album.images.map(item => `${item.url}`).join(' ')}
								alt="song image"
								className="mr-4 w-6 h-6"
							/>
							<div>
								<span className=" text-sm font-bold mb-1">
									{name}
								</span>
								<p className="text-gray-400 text-xs">{artists.map(artist => `${artist.name}`)}</p>
							</div>
						</div>
						<div className="flex items-center">
							<div className="mr-2">
								<p className="text-gray-400 text-xs">06:21</p>
							</div>
							<div>
								<FontAwesomeIcon
									icon={faEllipsis}
									className="text-gray-400 text-xs w-4"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col justify-between p-4 rounded ">
				<div className="flex items-center justify-between mb-2">
					<h2 className=" font-bold">Recommendations</h2>
					<span className="text-customBlue-1">
						<FontAwesomeIcon icon={faArrowRight} />
					</span>
				</div>
				
			</div>
		</div>
	);
};

export default Chart;
