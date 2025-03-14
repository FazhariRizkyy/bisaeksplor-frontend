import React from 'react'

const Home = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
      <video src="/video/hero1.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover' />
      <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
          <div>
            <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>
              Jelajahi Indonesia dengan mudah
            </h1>
            <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>Dapatkan Harga Diskon Hingga 90%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home