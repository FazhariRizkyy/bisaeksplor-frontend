import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 backdrop-blur-md bg-white/10 z-50">
      <div className="text-white text-2xl font-bold">BisaEksplor</div>
      <ul className="flex gap-6 text-white text-lg">
        {['Home', 'About', 'Destination', 'Blog', 'Contact'].map((item) => (
          <li key={item} className="cursor-pointer hover:underline">{item}</li>
        ))}
      </ul>
      <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200">
        Book Now
      </button>
    </nav>
  )
}

export default Navbar