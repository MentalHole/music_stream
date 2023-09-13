import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faPause,
  faPlus,
  faChartSimple,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { image1, image2, image3, image4, image5, image6,  bg} from "../assets/index";
import Image from "next/image";

const SongGrid = () => {
  const songsCol1 = [
    // Replace with your song data for Column 1
    {
      name: "Worry About Us",
      artist: "Rosie Lowe",
      icon: faPlay,
      image: image1,
    },
    {
      name: "Take a Chance (feat. Little Dragon)",
      artist: "Else",
      icon: faPause,
      image: image2,
    },
    {
      name: "Control",
      artist: "Else",
      icon: faChartSimple,
      image: image3,
    },
    // Add more songs as needed
  ];

  const songsCol2 = [
    // Replace with your song data for Column 2
    {
      name: "Lorde Tama",
      artist: "Else",
      icon: faChartSimple,
      image: image4,
    },
    {
      name: "Take a Chance (feat. Little Dragon)",
      artist: "Else",
      icon: faPlay,
      image: image5,
    },
    {
      name: "Control",
      artist: "Rosie Lowe",
      icon: faPlay,
      image: image6,
    },
    // Add more songs as needed
  ];

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10">
      <div className="flex flex-col justify-between p-4 rounded ">
        <div className="flex items-center justify-between mb-2">
          <h2 className=" font-bold">Latest Album Releases</h2>
          <span className="text-customBlue-1">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
        {songsCol1.map((song, index) => (
          <div
            key={index}
            className="p-4 rounded hover:bg-customBlue mb-2 flex items-center justify-between"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={song.icon}
                className="mr-4 w-4 text-customBlue-1"
              />
              <FontAwesomeIcon icon={faPlus} className="mr-4 w-4" />
              <Image src={song.image} alt="song image" className="mr-4 w-6 h-6" />
              <div>
                <span className=" text-sm font-bold mb-1">
                  {song.name}
                </span>
                <p className="text-gray-400 text-xs">{song.artist}</p>
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
          <h2 className=" font-bold">Latest Singles Releases</h2>
          <span className="text-customBlue-1">
            <FontAwesomeIcon icon={faArrowRight} className="w-4" />
          </span>
        </div>

        {songsCol2.map((song, index) => (
          <div
            key={index}
            className="p-4 rounded hover:bg-customBlue mb-2 flex items-center justify-between"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={song.icon}
                className="mr-4 text-customBlue-1 w-4"
              />
              <FontAwesomeIcon icon={faPlus} className="mr-4 w-4" />
              <Image src={song.image} alt="song image" className="mr-4 w-6 h-6" />
              <div>
                <span className=" text-sm font-bold mb-1">
                  {song.name}
                </span>
                <p className="text-gray-400 text-xs">{song.artist}</p>
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
    </div>
  );
};

export default SongGrid;
