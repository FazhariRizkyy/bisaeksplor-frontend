import React from 'react'
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/hero1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Let&apos;s Enjoy The Nature
        </h1>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center justify-around">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500 text-xl" />
          <input type="date" className="border p-2 rounded-md" placeholder="Start Date" />
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500 text-xl" />
          <input type="date" className="border p-2 rounded-md" placeholder="End Date" />
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500 text-xl" />
          <input type="text" className="border p-2 rounded-md" placeholder="Location" />
        </div>
      </div>
    </div>
  )
}

export default Hero
