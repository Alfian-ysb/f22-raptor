import React from 'react'
import GalleryImg1 from "../../assets/img/Gallery1.avif";
import GalleryImg2 from "../../assets/img/Gallery2.avif";
import GalleryImg3 from "../../assets/img/Gallery3.avif";
import GalleryImg4 from "../../assets/img/Gallery4.avif";
import GalleryImg5 from "../../assets/img/Gallery5.avif";

const Gallery = () => {
  return (
    <div className='w-full my-32'>
        <div className='grid grid-cols-4 grid-rows-2 gap-4 h-[70vh]'>
            <div className='row-span-2 '>
                <img src={GalleryImg1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='col-start-2 '>
                <img src={GalleryImg2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='col-start-3 '>
                <img src={GalleryImg3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='col-start-4 flex flex-col items-center justify-between pb-8'>
                <h1 className='uppercase text-title font-bebas-neue text-primary'>This plane is a game-changer</h1>
                <p className='text-lg text-neutral-light'>Experience the future of aviation with our cutting-edge aircraft.</p>
            </div>
            <div className='row-start-2 col-span-2 col-start-2 '>
                <img src={GalleryImg4} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='col-start-4 '>
                <img src={GalleryImg5} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default Gallery