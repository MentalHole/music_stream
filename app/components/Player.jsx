import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPause, faForward, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import {image1} from '../assets/index'

const Player = () => {
  const isPlaying = true; 
  const currentTime = "2:10"; 
  const totalTime = "-03:56"; 
  const progress = 50; 

  return (
    <div className="flex items-center justify-between bg-inherit p-4">
      <div className="flex items-center space-x-4 flex-grow">
        <Image width={100} height={100} src={image1} alt="song image" className="mr-4 w-10 h-10" />
        <div className="flex flex-col">
          <span className="text-sm mr-2 font-bold lg:block hidden">Take a Chance (feat. Little Dragon)</span>
          <p className="text-gray-400 text-xs">Else</p>
        </div>
        <p className="text-gray-400 mr-2">{currentTime}</p>
        {/* Custom Progress Bar */}
        <div className="w-[30%] bg-customBlue rounded-md h-1">
          <div className="bg-white rounded-md h-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-gray-400 ml-2 mr-2">{totalTime}</p>
      </div>
      <div className="flex items-center  text-gray-400">
        {/* Previous Button */}
        <button className="mr-4 ml-2">
          <FontAwesomeIcon icon={faBackward} className='w-4'/>
        </button>
        {/* Play/Pause Button */}
        <button className="mr-4 w-10 h-10 text-customBlue-1">
          {isPlaying ? (
            <FontAwesomeIcon icon={faPlayCircle} />
          ) : (
            <FontAwesomeIcon icon={faPause} />
          )}
        </button>
        {/* Next Button */}
        <button>
          <FontAwesomeIcon icon={faForward} className='w-4'/>
        </button>
      </div>
    </div>
  );
};

export default Player;
