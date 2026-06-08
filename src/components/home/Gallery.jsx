import React from 'react'
import GalleryImg1 from "../../assets/img/Gallery1.avif";
import GalleryImg2 from "../../assets/img/Gallery2.avif";
import GalleryImg3 from "../../assets/img/Gallery3.avif";
import GalleryImg4 from "../../assets/img/Gallery4.avif";
import GalleryImg5 from "../../assets/img/Gallery5.avif";

const Gallery = () => {
  return (
    <div className='w-full my-48 md:my-32'>
      <div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[70vh]'>
        
        <div className='h-60 md:h-full md:row-span-2'>
          <img src={GalleryImg1} alt="Gallery 1" className="w-full h-full object-cover" />
        </div>
        
        <div className='h-60 md:h-full md:col-start-2'>
          <img src={GalleryImg2} alt="Gallery 2" className="w-full h-full object-cover" />
        </div>
        
        <div className='h-60 md:h-full md:col-start-3'>
          <img src={GalleryImg3} alt="Gallery 3" className="w-full h-full object-cover" />
        </div>
        
        <div className='flex flex-col items-center text-center md:text-left justify-between py-6 md:py-0 md:pb-8 md:col-start-4'>
          <h1 className='uppercase text-title font-bebas-neue text-primary text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-0'>
            This plane is a game-changer
          </h1>
          <p className='text-lg text-neutral-light'>
            Experience the future of aviation with our cutting-edge aircraft.
          </p>
        </div>
        
        <div className='h-60 md:h-full md:row-start-2 md:col-span-2 md:col-start-2'>
          <img src={GalleryImg4} alt="Gallery 4" className="w-full h-full object-cover" />
        </div>
        
        <div className='h-60 md:h-full md:col-start-4'>
          <img src={GalleryImg5} alt="Gallery 5" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  )
}

export default Gallery