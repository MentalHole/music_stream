'use client'
import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPause, faForward, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import {image1} from '../app/assets/index'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const currentTime = "2:10"; 
  const totalTime = "03:56"; 
  const progress = 40;

  function togglePlayPause() {
    setIsPlaying(prev => !prev)
  }

  return (
    <div className="fixed b-0 bottom-0 w-full bg-dark">
      <div className="flex items-center space-x-4 flex-grow pb-2 px-12" >
        <div className="flex flex-row color-white">
          <Image width={100} height={100} src={image1} alt="song image" className="mr-4 w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-sm mr-2 font-bold lg:block hidden">Take a Chance (feat. Little Dragon)</span>
            <p className="text-gray-400 text-xs">Grandson</p>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <p className="text-gray-400 mr-2">{currentTime}</p>
          {/* Custom Progress Bar */}
          <div className="w-[30%] bg-[white] rounded-md h-1 cursor-pointer">
            <div className="bg-[aqua] rounded-md h-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-gray-400 ml-2 mr-2">{totalTime}</p>
        </div>
        <div className="flex items-center text-gray-400">
          {/* Previous Button */}
          <button className="mr-4 ml-2 hover:text-white">
            <FontAwesomeIcon icon={faBackward} className='w-4'/>
          </button>
          {/* Play/Pause Button */}
          <button 
            onClick={togglePlayPause}
            className="mr-4 w-10 h-10 text-customBlue-1 hover:text-white">
            {isPlaying ? (
              <FontAwesomeIcon icon={faPlayCircle} />
            ) : (
              <FontAwesomeIcon icon={faPause} />
            )}
          </button>
          {/* Next Button */}
          <button className='hover:text-white'>
            <FontAwesomeIcon icon={faForward} className='w-4'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
